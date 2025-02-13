const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authService = {
    hashPassword: async (password) => {
        return await bcrypt.hash(password, 10);
    },
    verifyPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
    },
    generateToken: (user) => {
        return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    },
};

module.exports = authService;