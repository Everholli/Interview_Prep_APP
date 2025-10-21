import {ApiError} from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import {User} from "../models/UserModels.js";

const verifyjwt = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Not authorized, no token");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decoded.id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Not authorized, user not found");
        }

        req.user = user;
        next();

    } catch (error) {
        throw new ApiError(401, "Not authorized, token failed");
    }
}

export { verifyjwt };