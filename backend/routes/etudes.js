const express = require('express');
const Etudes = require('../models/Etudes');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer toutes les études
router.get('/', async (req, res) => {
  try {
    const etudes = await Etudes.getAll();
    res.json(etudes);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter une nouvelle étude (protégé)
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const newEtude = await Etudes.create(title, description);
    res.json(newEtude);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'étude' });
  }
});

// Mettre à jour une étude (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedEtude = await Etudes.update(id, title, description);
    res.json(updatedEtude);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'étude' });
  }
});

// Supprimer une étude (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Etudes.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'étude' });
  }
});

module.exports = router;