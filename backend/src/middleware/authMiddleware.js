const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // Ajouter l'ID utilisateur à la requête
        next();
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ message: 'Token invalide.' });
    }
};

module.exports = authMiddleware;