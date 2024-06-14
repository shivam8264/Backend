const jwt = require('jsonwebtoken');
const JWT_SECRET = "2b0cdb17e05a2f48a839e2a73fbf9d49567d3099340b4b9dbf7e1d8e8f52e707";

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};
module.exports = fetchuser;
