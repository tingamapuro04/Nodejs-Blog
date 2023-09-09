export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Invalid token provided");
      }
      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json("You are not authenticated to perform this action");
  }
};
