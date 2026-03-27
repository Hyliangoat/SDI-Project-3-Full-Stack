//Will use jwt to verify the token sent from the client, will be used as middleware for protected routes in app.js
const jwt = require('jsonwebtoken')

const isLoggedIn = (req, res, next) => {
    const user = req.signedCookies.user

    if (!user){
        return res.status(401).json({error: 'LOGIN SILLY GOOSE'})
    }

    req.user = user;

    next();
}

const jwtCheck = (req, res, next) => {
    const header = req.headers.authorization;
    //Check for token
    if(!header) {
        return res.status(401).json({error: "No token"})
    }

    //Split from the bearer nonsense
    const token = header.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded;

        next();
    }catch(err){
        return res.status(403).json({error: `jwt thing: ${process.env.JWT_SECRET}`})
    }

}
module.exports = {isLoggedIn, jwtCheck}