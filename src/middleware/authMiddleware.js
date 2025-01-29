const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const { token } = req.cookies;  // Get the token from cookies
    // console.log("token from auth middleware", token);
    
    if (!token) 
      return res.status(401).json({ message: "No token, authorization denied" });
  
    // Verify token
    const decodedObj = jwt.verify(token, "bear");
    // console.log("decodedObj", decodedObj);
    
    const { userId } = decodedObj;  // Use decodedObj._id here, instead of decoded._id
    const user = await User.findById( {_id: userId});  // Find user using _id from decoded token
    
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;  // Attach the user to the request object 
      
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Error in authentication middleware:", err);  // Log the error
    res.status(401).json({ message: "Invalid token" });
  } 
};
