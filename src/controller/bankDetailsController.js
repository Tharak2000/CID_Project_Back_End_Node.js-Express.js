const bankDetailsService = require('../services/bankDetailsService');

exports.getAllBankDetails = async (req, res) => {
    try {
        const bankDetails = await bankDetailsService.getAllBankDetails();
        res.json(bankDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBankDetailById = async (req, res) => {
    try {
        const bankDetail = await bankDetailsService.getBankDetailById(req.params.bank_details_id);
        if (!bankDetail) {
            return res.status(404).json({ message: "Bank Detail Not Found" });
        }
        res.json(bankDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createBankDetail = async (req, res) => {
    try {
        const bankDetail = await bankDetailsService.createBankDetail(req.body);
        res.status(201).json(bankDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBankDetail = async (req, res) => {
    try {
        const bankDetail = await bankDetailsService.updateBankDetail(
            req.params.bank_details_id,
            req.body
        );
        if (!bankDetail) {
            return res.status(404).json({ message: "Bank Detail Not Found" });
        }
        res.json(bankDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBankDetail = async (req, res) => {
    try {
        const bankDetail = await bankDetailsService.deleteBankDetail(req.params.bank_details_id);
        if (!bankDetail) {
            return res.status(404).json({ message: "Bank Detail Not Found" });
        }
        res.json({ message: "Bank Detail deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
