const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const rateLimit = require('express-rate-limit');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const reportRoutes = require('./routes/reportRoutes'); // Assurez-vous que ce fichier existe
const dashboardRoutes = require('./routes/dashboardRoutes'); // Assurez-vous que ce fichier existe
const menuRoutes = require('./routes/menuRoutes');
const { body, validationResult } = require('express-validator');

dotenv.config();

const app = express();

// Middleware pour parser les cookies
app.use(cookieParser());
// Middleware pour parser le JSON
app.use(express.json());
// Middleware de limitation des requêtes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limite chaque IP à 100 requêtes par fenêtre
});
// Appliquer le middleware de limitation des requêtes à toutes les routes
app.use(limiter);

// Configuration de csurf
const csrfProtection = csrf({ cookie: true });
// Appliquez la protection CSRF à toutes les routes
app.use(csrfProtection);

// Route pour obtenir un token CSRF
app.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

// Utiliser les routes utilisateur
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/dashboards', dashboardRoutes);
app.use('/api/menu', menuRoutes); // Utiliser les routes du menu

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

module.exports = app;