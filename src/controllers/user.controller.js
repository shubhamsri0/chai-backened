import { asyncHandler } from '../utils/asyncHandler.js'; // Import asyncHandler middleware to handle exceptions in async functions and pass them to the error handling middleware in the server.js file 

const registerUser = asyncHandler(async (req, res) => { // Purpose of this function is to register a user in the database
    // The function will return a JSON response with a message that says "ok"
    return res.status(200).json({
        message: "ok"
    })
})

export { registerUser }