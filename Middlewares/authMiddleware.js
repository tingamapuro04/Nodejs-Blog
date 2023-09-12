import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Not authorized"
    })
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err){
      return res.status(403).json({
        message: "Invalid credential"
      })
    }
    req.payload = payload;
    next();
  })
};
