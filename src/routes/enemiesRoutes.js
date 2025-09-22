const express = require('express');
const router = express.Router();
const enemiesController = require('../controller/enemiesController');



router.get('/', enemiesController.getAllEnemies);

router.get('/:enemies_id', enemiesController.getEnemyById);

router.post('/', enemiesController.createEnemy);

router.put('/:enemies_id', enemiesController.updateEnemy);

router.put('/soft_delete/:enemies_id', enemiesController.deleteEnemy);

module.exports = router;
