export const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;
  const response = {
    message: err.message || "Something went wrong"
  };
  res.status(statusCode).json(response);
};
