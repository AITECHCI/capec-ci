const Service = require('../models/Service');

const serviceController = {
    createService: async (req, res) => {
        try {
            const { name, description } = req.body;
            const service = await Service.create(name, description);
            res.status(201).json(service);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllServices: async (req, res) => {
        try {
            const services = await Service.findAll();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Autres méthodes ici...
};

module.exports = serviceController;