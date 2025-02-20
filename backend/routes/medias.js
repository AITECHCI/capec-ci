const express = require('express');
const Medias = require('../models/Medias');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer tous les médias
router.get('/', async (req, res) => {
  try {
    const medias = await Medias.getAll();
    res.json(medias);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter un nouveau média (protégé)
router.post('/', auth, async (req, res) => {
  const { type, url } = req.body;
  try {
    const newMedia = await Medias.create(type, url);
    res.json(newMedia);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du média' });
  }
});

// Mettre à jour un média (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { type, url } = req.body;
  try {
    const updatedMedia = await Medias.update(id, type, url);
    res.json(updatedMedia);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du média' });
  }
});

// Supprimer un média (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Medias.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression du média' });
  }
});

module.exports = router;