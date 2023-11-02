const jwt = require('jsonwebtoken');

function createToken(payload) {
    const token = jwt.sign(payload, 'rahasiabangetini');
    return token
}

function verifyToken(payload) {
    const verify = jwt.verify(payload, 'rahasiabangetini')
    return verify
}

module.exports = { createToken, verifyToken }