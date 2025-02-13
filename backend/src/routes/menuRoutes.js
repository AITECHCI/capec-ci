// routes/menuRoutes.js

const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Récupérer tous les éléments du menu
router.get('/menu', async (req, res) => {
    try {
        const menuItems = await MenuItem.findAll();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;