const express = require('express');
const Chercheurs = require('../models/Chercheurs');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer tous les chercheurs
router.get('/', async (req, res) => {
  try {
    const chercheurs = await Chercheurs.getAll();
    res.json(chercheurs);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});

// Ajouter un nouveau chercheur (protégé)
router.post('/', auth, async (req, res) => {
  const { name, specialization } = req.body;
  try {
    const newChercheur = await Chercheurs.create(name, specialization);
    res.json(newChercheur);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du chercheur' });
  }
});

// Mettre à jour un chercheur (protégé)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { name, specialization } = req.body;
  try {
    const updatedChercheur = await Chercheurs.update(id, name, specialization);
    res.json(updatedChercheur);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du chercheur' });
  }
});

// Supprimer un chercheur (protégé)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Chercheurs.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression du chercheur' });
  }
});

module.exports = router;