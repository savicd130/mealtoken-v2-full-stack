const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/users");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${req.user._id}${file.originalname.slice(file.originalname.length - 4)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", file), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
}).single("avatar");

const userRouter = express.Router();
const { generateWebToken } = require("../data/webTokenGenerator.js");
const { userAuth } = require("../middleware/authorization.js");

const User = require("../models/User.js");

// @route   Post api/user/register
// @desc    Register user
// @access  Public

userRouter.post(
  "/register",
  [
    check("firstName", "Please make a valid firstName").exists(),
    check("lastName", "Please make a valid lastName").exists(),
    check("email", "Please make a valid email").isEmail(),
    check("password", "Please make a valid password")
      .exists()
      .isLength({ min: 8 }),
    check("username", "Please make a valid username").exists(),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(404).send({ error: "Some input field was not valid" });
    }
    try {
      const uniqueEmailUser = await User.findOne({ email: req.body.email });
      if (uniqueEmailUser)
        res.status(403).send({ error: "Email must be unique" });
      const uniqueUsernameUser = await User.findOne({
        username: req.body.username,
      });
      if (uniqueUsernameUser)
        res.status(403).send({ error: "Username is taken" });

      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        username: req.body.username,
      });

      const newUser = await user.save();

      res.send({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        username: newUser.username,
        admin: newUser.admin,
        avatar: newUser.avatar,
        token: generateWebToken(newUser),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Problem with server");
    }
  }
);

// @route   Post api/user/me
// @desc    Get user profile
// @access  Private
userRouter.get("/me", userAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-admin -password");
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Problem with server" });
  }
});

// @route   Put api/user/me/update
// @desc    Update profile
// @access  Private
userRouter.put("/me/update", userAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const userEmailCheck = await User.findOne({ email: req.body.email });
    const userUsernameCheck = await User.findOne({
      username: req.body.username,
    });
    if (userEmailCheck && req.user.email !== req.body.email) {
      return res.status(403).send({ error: "Email is  taken" });
    }
    if (userUsernameCheck && req.user.username !== req.body.username) {
      return res.status(403).send({ error: "Username is taken" });
    }
    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.username = req.body.username || user.username;
      const isUpdate = await user.save();
      res.status(200).send({
        _id: isUpdate._id,
        firstName: isUpdate.firstName,
        lastName: isUpdate.lastName,
        email: isUpdate.email,
        username: isUpdate.username,
        avatar: isUpdate.avatar,
        token: generateWebToken(isUpdate),
      });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Problem with server" });
  }
});

// @route   Put api/user/me/changepassword
// @desc    Change password
// @access  Private
userRouter.put("/me/changepassword", userAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        user.password =
          bcrypt.hashSync(req.body.newPassword, 8) || user.password;
        const isUpdate = await user.save();
        return res.status(200).send({
          _id: isUpdate._id,
          firstName: isUpdate.firstName,
          lastName: isUpdate.lastName,
          email: isUpdate.email,
          username: isUpdate.username,
          avatar: isUpdate.avatar,
          token: generateWebToken(isUpdate),
        });
      }
    }
    res.status(404).send({ error: "Wrong old password" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Problem with server" });
  }
});

// @route   Put api/user/me/avatar
// @desc    Upload avatar
// @access  Private
userRouter.post("/me/avatar", userAuth, async (req, res) => {
  try {
    upload(req, res, async function (err) {
      try {
        if (err instanceof multer.MulterError) {
          if (err.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(403).send({ error: "File must be JPG format" });
          } else {
            return res.status(403).send({ error: "File is too large" });
          }
        } else if (err) {
          return res.status(403).send({ error: "Something went wrong" });
        } else {
          const user = await User.findById(req.user._id);
          user.avatar = `/users/${req.file.filename}`;
          await user.save();
          res.status(200).send({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            avatar: user.avatar,
            token: generateWebToken(user),
          });
        }
      } catch (error) {
        res.status(403).send({ error: "Something went wrong" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Problem with server");
  }
});

module.exports = userRouter;
