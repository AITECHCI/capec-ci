const Dashboard = require('../models/Dashboard');

const dashboardController = {
    createDashboard: async (req, res) => {
        try {
            const { name, description, created_by } = req.body;
            const dashboard = await Dashboard.create(name, description, created_by);
            res.status(201).json(dashboard);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllDashboards: async (req, res) => {
        try {
            const dashboards = await Dashboard.findAll();
            res.status(200).json(dashboards);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Autres méthodes ici...
};

module.exports = dashboardController;