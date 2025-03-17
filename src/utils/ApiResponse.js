// A class to format API response 
class ApiResponse { // A class to format API response 
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.success = statusCode < 400
    }
}

export { ApiResponse }