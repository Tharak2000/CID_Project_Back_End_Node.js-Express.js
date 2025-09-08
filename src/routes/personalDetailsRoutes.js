const express = require('express');
const router = express.Router();
const personalDetailsController = require('../controller/personalDetailsController');

router.get('/', personalDetailsController.getAllPersonalDetails);
router.get('/:personal_details_id', personalDetailsController.getPersonalDetailsById);
router.post('/', personalDetailsController.createPersonalDetails);
router.put('/:personal_details_id', personalDetailsController.updatePersonalDetails);
router.put('/soft_delete/:personal_details_id', personalDetailsController.deletePersonalDetails);

module.exports = router;