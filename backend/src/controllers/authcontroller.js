import { User } from '../models/UserModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

// const generateToken = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     if (!user) throw new Error("User not found for token generation");

//     const accessToken = user.generateAccessToken();
//     const refreshToken = user.generateRefreshToken();

//     user.refreshToken = refreshToken;
//     await user.save();

//     return { accessToken, refreshToken };

//   } catch (error) {
    
//     console.error("Token generation error details:", error);
//     throw new ApiError("Token generation failed", 500);
//   }
// };
const generateToken = async (userId) => {
  try {
    console.log("🔹 generateToken called for:", userId);

    const user = await User.findById(userId);
    console.log("🔹 Found user:", user ? user.email : "❌ No user found");

    if (!user) throw new Error("User not found for token generation");

    console.log("🔹 Checking for token functions...");
    console.log("Has accessToken func:", typeof user.generateAccessToken);
    console.log("Has refreshToken func:", typeof user.generateRefreshToken);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    console.log("🔹 Tokens generated successfully");

    user.refreshToken = refreshToken;
    await user.save();

    console.log("🔹 Tokens saved");
    return { accessToken, refreshToken };

  } catch (error) {
    console.error("❌ Token generation error details:", error);
    throw new ApiError("Token generation failed", 500);
  }
};


const registerUser = async (req, res) => {
  try {
    const { username, email, password, profileImageUrl } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new ApiError(409, "User with given email or username already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ 
        username, 
        email, 
        password: hashedPassword, 
        profileImageUrl 
    });

    const createdUser = await User.findById(user._id).select( "-password -refreshToken " );
    if (!createdUser) {
      return res.status(500).json({ message: 'User creation failed' });
    }

    return res.
    status(201)
    .json(
        new ApiResponse(201, "User created successfully", createdUser)
    )

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message || 'Registration failed' });
    }   
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!password || !email) {
    throw new ApiError(400, "All fields are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const { accessToken, refreshToken } = await generateToken(user._id);
    const loggedInUser = await User.findById(user._id).select( "-password -refreshToken " );
    
    const options = {
      httpOnly: true,
      secure:  process.env.NODE_ENV === 'production', // true only on HTTPS
    };

    return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
        new ApiResponse(
            200,{
            user : loggedInUser, accessToken, refreshToken
            },
            "User Logged In successfully"

        )
    );

  } catch (error) {
    
  console.error("Login Error:", error);
  return res.status(500).json({ message: "Login failed", error: error.message });
  }
};

export { registerUser, loginUser };