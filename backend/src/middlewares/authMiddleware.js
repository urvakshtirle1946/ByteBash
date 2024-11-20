const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "Admin") return res.status(403).json({ message: "Access denied" });
  next();
};

exports.mentorOnly = (req, res, next) => {
  if (req.user.role !== "Mentor" && req.user.role !== "Admin")
    return res.status(403).json({ message: "Access denied" });
  next();
};
