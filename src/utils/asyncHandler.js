// Export an async handler function that takes a function as an argument and returns a promise that resolves the request handler function

const asyncHandler = (requestHandler) => {  // Define an async handler function that takes a function as an argument by promises
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))  // Return a promise that resolves the request handler function 
    }
} 

export {asyncHandler}


//const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const ayncHandler => (func) => async () => {}

// const asyncHandler = (func) => async (req, res, next) => {  // Define an async handler function that takes a function as an argument by try catch
//     try {
//          await fn(req, res, next)        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false;
//             message: err.message
//         })
//     }
// }