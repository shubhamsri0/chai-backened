// This file is used to create a custom error class that will be used to handle errors in the application.
// The ApiError class extends the Error class and adds additional properties to it.
class ApiError extends Error { // extends Error is used to inherit the properties of Error class 
    constructor ( 
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message),
        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.errors = errors

        if(stack) { // Check if the stack is provided 
            this.stack = stack 
        } else{
            Error.captureStackTrace(this, this.constuctor) // Capture the stack trace 
        }
    }
}

export { ApiError }
