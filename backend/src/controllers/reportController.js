const Report = require('../models/Report');

const reportController = {
    createReport: async (req, res) => {
        try {
            const { title, description, type, generated_by, file_path } = req.body;
            const report = await Report.create(title, description, type, generated_by, file_path);
            res.status(201).json(report);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllReports: async (req, res) => {
        try {
            const reports = await Report.findAll();
            res.status(200).json(reports);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Autres méthodes ici...
};

module.exports = reportController;