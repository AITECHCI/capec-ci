const express = require('express');
const APropos = require('../models/APropos');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer toutes les entrées APropos
router.get('/', async (req, res) => {
  try {
    const apropos = await APropos.getAll();
    res.json(apropos);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter une nouvelle entrée APropos (protégé)
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const newApropos = await APropos.create(title, content);
    res.json(newApropos);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'entrée' });
  }
});

// Mettre à jour une entrée APropos (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedApropos = await APropos.update(id, title, content);
    res.json(updatedApropos);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'entrée' });
  }
});

// Supprimer une entrée APropos (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await APropos.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'entrée' });
  }
});

module.exports = router;