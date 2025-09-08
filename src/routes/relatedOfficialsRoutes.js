const express = require('express');
const router = express.Router();
const relatedOfficialsController = require('../controller/relatedOfficialsController');

router.get('/', relatedOfficialsController.getAllRelatedOfficials);
router.get('/:related_official_id', relatedOfficialsController.getRelatedOfficialById);
router.post('/', relatedOfficialsController.createRelatedOfficial);
router.put('/:related_official_id', relatedOfficialsController.updateRelatedOfficial);
router.put('/soft_delete/:related_official_id', relatedOfficialsController.deleteRelatedOfficial);

module.exports = router;