const jwt = require("jsonwebtoken");
const privatekey = require("./keys/private.key").replace(/\\n/g, "\n");
const publickey = require("./keys/public.key").replace(/\\n/g, "\n");

const options = {
  issuer: "user",
  expiresIn: "1h",
  algorithm: "RS256"
};

const auth = {
  generateToken: (ID, user) => {
    const payload = {
      id: ID,
      email: user,
    };
    const token = jwt.sign(payload, privatekey, options);
    return token;
  },
  verifyToken: cookies => {
    try {
      const token = cookies.authToken;
      return jwt.verify(token, publickey, options);
    } catch (e) {
      return false;
    }
  }
};

module.exports = auth;