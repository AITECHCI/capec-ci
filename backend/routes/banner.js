const express = require('express');
const Banner = require('../models/banner');
const auth = require('../middlewares/auth'); // Si vous avez besoin d'authentification

const router = express.Router();

// Récupérer tous les bannières
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.getAllBanners();
    res.json(banners);
  } catch (err) {
    console.error(err); // Affichez l'erreur dans les logs
    res.status(500).json({ message: 'Erreur lors de la récupération des bannières' });
  }
});

// Ajouter une nouvelle bannière (protégé si nécessaire)
router.post('/', auth, async (req, res) => {
  const bannerData = req.body;
  try {
    const newBanner = await Banner.createBanner(bannerData);
    res.status(201).json(newBanner);
  } catch (err) {
    console.error(err); // Affichez l'erreur dans les logs
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la bannière' });
  }
});

module.exports = router;