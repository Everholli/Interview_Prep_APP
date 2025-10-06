class ApiError extends Error {
  constructor(statusCode, message="An error occurred", error=[], stack="") {
    super(message);      // call parent Error class constructor
    this.statusCode = statusCode;      // HTTP status code (e.g., 401, 404, 500)
    this.message = message;      // main error message
    this.error = error;      // optional detailed info (like validation errors)
    this.stack = stack;      // stack trace (for debugging)

    if (stack) {
      this.stack = stack;     // use custom stack if provided
    } else {
      Error.captureStackTrace(this, this.constructor);     // capture current stack trace
    }
  }

}
