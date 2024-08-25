function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    // console.error(err);
    if (err.code && err.code === 11000) {
        statusCode = 400;
        const field = Object.keys(err.keyValue);
        message = `${field} already exists.`;
      }
    res.status(statusCode).json({
        success: false,
        message: message,
    });
    
}

export default errorHandler;
