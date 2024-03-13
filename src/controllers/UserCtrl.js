const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
const { generateToken } = require("../config/jwtToken");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { generateRefreshToken } = require("../config/generateRefreshToken");

const createUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ error: "User with this email already exists" });
    }
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//user login
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      role: findUser?.role,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

//handle RefreshToken

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No RefreshToken in Cookie");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No refreshToken present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id != decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

// logout

const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  Object.keys(cookies).forEach((cookie) => {
    res.clearCookie(cookie, {
      httpOnly: true,
      secure: true,
    });
  });
//send Logout to response
  res.json("Logout")
});

//fetching user information for authenticated purposes

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const user = await User.findById(id).select('-password');
    //omit user password from response
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }

});

module.exports = {
  createUser,
  loginUserCtrl,
  handleRefreshToken,
  logout,
  getUser,
};
