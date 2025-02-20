const express = require('express');
const Accueil = require('../models/accueil');
const auth = require('../middlewares/auth');

const router = express.Router();

// Récupérer le contenu d'accueil
router.get('/', async (req, res) => {
  try {
    const accueil = await Accueil.getContent();
    res.json(accueil);
  } catch (err) {
    console.error(err); // Affichez l'erreur dans les logs
    res.status(500).json({ message: 'Erreur lors de la récupération du contenu' });
  }
});

// Mettre à jour le contenu d'accueil (protégé)
router.put('/', auth, async (req, res) => {
  const { content } = req.body;
  try {
    const updatedAccueil = await Accueil.updateContent(content);
    res.json(updatedAccueil);
  } catch (err) {
    console.error(err); // Affichez l'erreur dans les logs
    res.status(500).json({ message: 'Erreur lors de la mise à jour du contenu' });
  }
});

module.exports = router;