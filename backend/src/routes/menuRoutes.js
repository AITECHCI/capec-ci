// src/routes/menuRoutes.js
const express = require('express');
const pool = require('../config/db'); // Assurez-vous que ce fichier est configuré pour la connexion à la base de données
const router = express.Router();

// Récupérer tous les éléments du menu
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM menu_items ORDER BY id');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;