export const verifyToken = (req, res, next) => {
  // Get the token from the request headers, query string, or cookies
  const token =
    req.headers.Authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // If the token is valid, you can attach the decoded user information to the request for further use
    req.user = decoded;
    next();
  });
};
