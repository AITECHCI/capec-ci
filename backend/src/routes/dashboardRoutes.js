const express = require('express');
const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

router.post('/', dashboardController.createDashboard);
router.get('/', dashboardController.getAllDashboards);
// Autres routes ici...

module.exports = router;