const express = require('express');
const router = express.Router();
const bankDetailsController = require('../controller/bankDetailsController');

// Get all bank details
router.get('/', bankDetailsController.getAllBankDetails);

// Get bank detail by ID
router.get('/:bank_details_id', bankDetailsController.getBankDetailById);

// Create new bank detail
router.post('/', bankDetailsController.createBankDetail);

// Update bank detail
router.put('/:bank_details_id', bankDetailsController.updateBankDetail);

// Soft delete bank detail
router.put('/soft_delete/:bank_details_id', bankDetailsController.deleteBankDetail);

module.exports = router;
