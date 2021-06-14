exports.adminAuth = (req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    res.status(403).send({ error: "Unauthorized" });
  }
};
