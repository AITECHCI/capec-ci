const express = require('express');
const pool = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Créer une nouvelle transaction
router.post('/', authMiddleware, async (req, res) => {
    const { service_id, amount } = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO transactions (user_id, service_id, amount) VALUES ($1, $2, $3) RETURNING *',
            [req.userId, service_id, amount]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Obtenir toutes les transactions de l'utilisateur connecté
router.get('/', authMiddleware, async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM transactions WHERE user_id = $1', [req.userId]);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;