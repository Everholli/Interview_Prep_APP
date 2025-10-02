import React, { useState } from "react";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if(!validEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if(password.length === 0) {
      alert("Password cannot be empty");
      return;
    }

    try {
      
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
    }

    // TODO: Replace with your login API call
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h2>
      <p className="text-sm text-gray-600 text-center mb-8">
        Login to continue your interview prep journey
      </p>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password with show/hide toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Login
        </button>
      </form>

      {/* Switch to Sign Up */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={() => setCurrentPage("signup")}
          className="text-orange-600 font-semibold hover:underline"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
