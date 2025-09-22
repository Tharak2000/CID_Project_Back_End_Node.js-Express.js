const enemiesService = require('../services/enemiesService');

exports.getAllEnemies = async (req, res) => {   
    try {
        const allEnemies = await enemiesService.getAllEnemies();
        res.json(allEnemies);       
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEnemyById = async (req, res) => {
    try {
        const enemy = await enemiesService.getEnemyById(req.params.enemies_id);
        if (!enemy) {
            return res.status(404).json({ message: "Enemy Not Found" });
        }
        res.json(enemy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEnemy = async (req, res) => {
    const { personal_details_id, enemy_individuals, enemy_gangs } = req.body;
    if (!personal_details_id || !enemy_individuals || !enemy_gangs) {
        return res.status(400).json("Please provide all the fields");
    }
    try {
        const enemy = await enemiesService.createEnemy({ personal_details_id, enemy_individuals, enemy_gangs });
        res.status(201).json(enemy);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

exports.updateEnemy = async (req, res) => {
    const { enemy_individuals, enemy_gangs } = req.body;
    try {   
        const enemy = await enemiesService.updateEnemy(req.params.enemies_id, { enemy_individuals, enemy_gangs });
        if (!enemy) {
            return res.status(404).json({ message: "Enemy Not Found" });
        }
        res.json(enemy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteEnemy = async (req, res) => {
    try {
        const enemy = await enemiesService.deleteEnemy(req.params.enemies_id);  
        if (!enemy) {
            return res.status(404).json({ message: "Enemy Not Found" });
        }
        res.json({ message: "Enemy deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


