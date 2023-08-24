// var jwt = require('jsonwebtoken');
// const JWT_SECRET = "prasadkamat9844"
// const fetchuser = (req, res, next) => {
//     const token = req.header('auth_token');
//     // if (!token) {
//     //       res.status(401).send({ error: "Please authenticate using a valid token" })
//     // }
//     // /
//         const data = jwt.verify(token, JWT_SECRET);
//         req.user = data.user;
//         next();
//     // } catch (error) {
//     //       res.status(401).send({ error: "Please authenticate using a valid token" })
//     // }
// }
// module.exports = fetchuser;
var jwt = require('jsonwebtoken');
const JWT_SECRET = "prasadkamat9844"

const fetchuser = (req, res, next) => {
    const token = req.header('auth_token');
    
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;
