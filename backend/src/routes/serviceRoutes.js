const express = require('express');
const { body, validationResult } = require('express-validator');
const pool = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Obtenir tous les services avec pagination
router.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit; // Calculer l'offset

    try {
        const { rows } = await pool.query(
            'SELECT * FROM services LIMIT $1 OFFSET $2',
            [limit, offset]
        );

        // Compter le nombre total de services
        const { rows: countRows } = await pool.query('SELECT COUNT(*) FROM services');
        const totalPages = Math.ceil(countRows[0].count / limit);

        res.json({
            page: parseInt(page),
            limit: parseInt(limit),
            totalPages,
            services: rows,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Recherche de services par nom
router.get('/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'La requête de recherche est requise.' });
    }

    try {
        const { rows } = await pool.query(
            'SELECT * FROM services WHERE name ILIKE $1',
            [`%${query}%`]
        );
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Créer un nouveau service (admin seulement)
router.post(
    '/',
    authMiddleware,
    [
        body('name').trim().notEmpty().withMessage('Le nom du service est requis'),
        body('description').trim().notEmpty().withMessage('La description est requise'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description } = req.body;
        try {
            const { rows } = await pool.query('SELECT role FROM users WHERE id = $1', [req.userId]);
            if (rows.length === 0 || rows[0].role !== 'admin') {
                return res.status(403).json({ message: 'Accès refusé. Admin seulement.' });
            }

            const { rows: newService } = await pool.query(
                'INSERT INTO services (name, description) VALUES ($1, $2) RETURNING *',
                [name, description]
            );
            res.status(201).json(newService[0]);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erreur serveur');
        }
    }
);

module.exports = router;