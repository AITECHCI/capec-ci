const pool = require('../config/db');

const roleMiddleware = (role) => {
    return async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT role FROM users WHERE id = $1', [req.userId]);
            if (rows.length === 0 || rows[0].role !== role) {
                return res.status(403).json({ message: `Accès refusé. ${role} seulement.` });
            }
            next();
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Erreur serveur' });
        }
    };
};

module.exports = roleMiddleware;