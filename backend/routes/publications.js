const express = require('express');
const Publications = require('../models/Publications');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer toutes les publications
router.get('/', async (req, res) => {
  try {
    const publications = await Publications.getAll();
    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter une nouvelle publication (protégé)
router.post('/', auth, async (req, res) => {
  const { title, link } = req.body;
  try {
    const newPublication = await Publications.create(title, link);
    res.json(newPublication);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la publication' });
  }
});

// Mettre à jour une publication (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, link } = req.body;
  try {
    const updatedPublication = await Publications.update(id, title, link);
    res.json(updatedPublication);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la publication' });
  }
});

// Supprimer une publication (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Publications.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la publication' });
  }
});

module.exports = router;