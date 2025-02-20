const express = require('express');
const accueilRoutes = require('./routes/accueil');
const aproposRoutes = require('./routes/apropos');
const etudesRoutes = require('./routes/etudes');
const recherchesRoutes = require('./routes/recherches');
const publicationsRoutes = require('./routes/publications');
const formationsRoutes = require('./routes/formations');
const activitesRoutes = require('./routes/activites');
const mediasRoutes = require('./routes/medias');
const chercheursRoutes = require('./routes/chercheurs');
const authRoutes = require('./routes/auth');
const bannerRoutes = require('./routes/banner');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/accueil', accueilRoutes); // Montage des routes pour Accueil
app.use('/api/apropos', aproposRoutes); // Montage des routes pour APropos
app.use('/api/etudes', etudesRoutes); // Montage des routes pour Etudes
app.use('/api/recherches', recherchesRoutes); // Montage des routes pour Recherches
app.use('/api/publications', publicationsRoutes); // Montage des routes pour Publications
app.use('/api/formations', formationsRoutes); // Montage des routes pour Formations
app.use('/api/activites', activitesRoutes); // Montage des routes pour Activites
app.use('/api/medias', mediasRoutes); // Montage des routes pour Medias
app.use('/api/chercheurs', chercheursRoutes); // Montage des routes pour Chercheurs
app.use('/api/auth', authRoutes); // Montage des routes pour l'authentification
app.use('/api/banners', bannerRoutes); 
// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});