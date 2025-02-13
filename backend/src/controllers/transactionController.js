const Transaction = require('../models/Transaction');

const transactionController = {
    createTransaction: async (req, res) => {
        try {
            const { user_id, service_id, amount } = req.body;
            const transaction = await Transaction.create(user_id, service_id, amount);
            res.status(201).json(transaction);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllTransactions: async (req, res) => {
        try {
            const transactions = await Transaction.findAll();
            res.status(200).json(transactions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Autres méthodes ici...
};

module.exports = transactionController;