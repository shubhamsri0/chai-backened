class ApiError extends Error { // extends Error is used to inherit the properties of Error class 
    constructor ( 
        statusCode,
        message= "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message),
        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.errors = errors

        if(statck) { // Check if the stack is provided 
            this.stack = statck 
        } else{
            Error.captureStackTrace(this, this.constuctor) // Capture the stack trace 
        }
    }
}

export { ApiError }