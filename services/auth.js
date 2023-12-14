const JWT_SECRET_KEY="go4aMrD7QEYAGFoQoxACIOw4IUJ5Hx2puvQjfmrFoUjHsUULbImhBErWlpwIc6icfJtohtAMEDyZLIOSAEvBQzKdUZsGQflq4lWhhuAZ1McCxqElAcRhHxTgDvhRx0LE";

const jwt = require("jasonwebtoken");

function getUserJwt(id, email, name, role, expDays = 7){
const tokenData = {
    uid: id,
    email: email,
    name: name,
    role: role,
    time: Date.now,
};
const tokenOptions = {
    expiresIn: expDays * 24 * 60 * 60
};

const token = jwt.sign(tokenData, JWT_SECRET_KEY, tokenOptions);

return token;

}

//middleware for auth cookie check
function checkAuthCookie(req, res, next){
    const token = req.cookies("auth");
    console.log("COOKIE CHECK", token);
    const result = jwt.verify(token, JWT_SECRET_KEY);
    console.log("TOKEN CHECK", result);
}

module.exports = {
    getUserJwt,
    checkAuthCookie,
};