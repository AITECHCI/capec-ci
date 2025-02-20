const express = require('express');
const Formations = require('../models/Formations');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer toutes les formations
router.get('/', async (req, res) => {
  try {
    const formations = await Formations.getAll();
    res.json(formations);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter une nouvelle formation (protégé)
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const newFormation = await Formations.create(title, description);
    res.json(newFormation);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la formation' });
  }
});

// Mettre à jour une formation (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedFormation = await Formations.update(id, title, description);
    res.json(updatedFormation);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la formation' });
  }
});

// Supprimer une formation (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Formations.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la formation' });
  }
});

module.exports = router;