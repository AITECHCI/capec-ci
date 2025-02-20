const express = require('express');
const Recherches = require('../models/Recherches');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer toutes les recherches
router.get('/', async (req, res) => {
  try {
    const recherches = await Recherches.getAll();
    res.json(recherches);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter une nouvelle recherche (protégé)
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const newRecherche = await Recherches.create(title, description);
    res.json(newRecherche);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la recherche' });
  }
});

// Mettre à jour une recherche (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedRecherche = await Recherches.update(id, title, description);
    res.json(updatedRecherche);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la recherche' });
  }
});

// Supprimer une recherche (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Recherches.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la recherche' });
  }
});

module.exports = router;