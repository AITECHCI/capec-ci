const express = require('express');
const authRoutes = require('./routes/auth');
const accueilRoutes = require('./routes/accueil');
const aproposRoutes = require('./routes/apropos');
const etudesRoutes = require('./routes/etudes');
const recherchesRoutes = require('./routes/recherches');
const publicationsRoutes = require('./routes/publications');
const formationsRoutes = require('./routes/formations');
const activitesRoutes = require('./routes/activites');
const mediasRoutes = require('./routes/medias');
const chercheursRoutes = require('./routes/chercheurs');
const usersRoutes = require('./routes/users');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/accueil', accueilRoutes);
app.use('/api/apropos', aproposRoutes);
app.use('/api/etudes', etudesRoutes);
app.use('/api/recherches', recherchesRoutes);
app.use('/api/publications', publicationsRoutes);
app.use('/api/formations', formationsRoutes);
app.use('/api/activites', activitesRoutes);
app.use('/api/medias', mediasRoutes);
app.use('/api/chercheurs', chercheursRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});