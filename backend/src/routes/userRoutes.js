const express = require('express');
const pool = require('../config/db');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { comparePassword, hashPassword } = require('../utils/authUtils');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Inscription
router.post(
    '/register',
    [
        body('username').notEmpty().withMessage('Le nom d\'utilisateur est requis'),
        body('email').isEmail().withMessage('Un email valide est requis'),
        body('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;
        try {
            const hashedPassword = await hashPassword(password);
            const { rows } = await pool.query(
                'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
                [username, email, hashedPassword]
            );
            res.status(201).json(rows[0]);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erreur serveur');
        }
    }
);

// Connexion
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Un email valide est requis'),
        body('password').notEmpty().withMessage('Le mot de passe est requis'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            if (rows.length === 0) {
                return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
            }

            const user = rows[0];
            const isMatch = await comparePassword(password, user.password_hash);
            if (!isMatch) {
                return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
            }

            // Générer un token JWT
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erreur serveur');
        }
    }
);

// Route protégée pour obtenir les informations de l'utilisateur connecté
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [req.userId]);
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour obtenir tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;