const pool = require('../db');
const queries = require('../queries/enemiesQueries');

exports.getAllEnemies = async () => {
    const result = await pool.query(queries.GET_ALL_ENEMIES);
    return result.rows;
};  

exports.getEnemyById = async (enemies_id) => {
    const result = await pool.query(queries.GET_ENEMY_BY_ID, [enemies_id]);
    return result.rows[0];
}

exports.createEnemy = async (data) => {
    const { personal_details_id, enemy_individuals, enemy_gangs } = data;
    const values = [personal_details_id, enemy_individuals, enemy_gangs];
    const result = await pool.query(queries.CREATE_ENEMY, values);
    return result.rows[0];
}

exports.updateEnemy = async (enemies_id, data) => {
    const { enemy_individuals, enemy_gangs } = data;
    const values = [enemy_individuals, enemy_gangs, enemies_id];
    const result = await pool.query(queries.UPDATE_ENEMY, values);
    return result.rows[0];
}

exports.deleteEnemy = async (enemies_id) => {
    const result = await pool.query(queries.SOFT_DELETE_ENEMY, [enemies_id]);
    return result.rows[0];
}

