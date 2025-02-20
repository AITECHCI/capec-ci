const express = require('express');
const Activites = require('../models/Activites');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer toutes les activités
router.get('/', async (req, res) => {
  try {
    const activites = await Activites.getAll();
    res.json(activites);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter une nouvelle activité (protégé)
router.post('/', auth, async (req, res) => {
  const { title, date } = req.body;
  try {
    const newActivite = await Activites.create(title, date);
    res.json(newActivite);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'activité' });
  }
});

// Mettre à jour une activité (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, date } = req.body;
  try {
    const updatedActivite = await Activites.update(id, title, date);
    res.json(updatedActivite);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'activité' });
  }
});

// Supprimer une activité (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Activites.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'activité' });
  }
});

module.exports = router;