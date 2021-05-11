//* Example of error handlers for specific uses:
// const AppError = require("../utils/appError");

// const handleJWTExpiredError = () =>
//     new AppError("Token expired! Please log in again.", 401);

// const handleJWTError = () =>
//     new AppError("Invalid token. Please log in again!", 401);

// Three params in a middleware are detected as error handler by express
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // if (process.env.NODE_ENV === "development") {
    //     sendErrorDev(err, req, res);
    // } else if (process.env.NODE_ENV === "production") {
    //     let error = { ...err };
    //     error.message = err.message;

    //     if (err.name === "CastError") error = handleCastErrorDB(err);
    //     if (err.code === 11000) error = handleDuplicateFieldsDB(err);
    //     if (err.name === "ValidationError")
    //         error = handleValidationErrorDB(err);
    //     if (err.name === "JsonWebTokenError") error = handleJWTError(err);
    //     if (err.name === "TokenExpiredError")
    //         error = handleJWTExpiredError(err);
    //     sendErrorProd(error, req, res);
    // }
};
