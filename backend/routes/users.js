const express = require('express');
const pool = require('../config');
const bcrypt = require('bcryptjs');
const authenticateToken = require('../middlewares/authenticateToken');
const router = express.Router();

// Récupérer tous les utilisateurs (protégé)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM Users');
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter un nouvel utilisateur (protégé)
router.post('/', authenticateToken, async (req, res) => {
  const { username, password, email, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO Users (username, password, email, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, hashedPassword, email, role]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;