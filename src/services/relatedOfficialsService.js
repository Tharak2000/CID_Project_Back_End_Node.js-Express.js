const pool = require('../db');
const queries = require('../queries/relatedOfficialsQueries');

exports.getAllRelatedOfficials = async () =>{
    const relatedOfficial =await pool.query(queries.GET_ALL_RELATED_OFFICIALS);
    return relatedOfficial.rows;
}

exports.getRelatedOfficialById = async (related_official_id) => {
    const result = await pool.query(queries.GET_RELATED_OFFICIALS_BY_ID, [related_official_id]);
    return result.rows[0];
}

exports.createRelatedOfficial = async (data) => {
    const {personal_details_id, related_official_name, related_official_nic_number} = data;
    const values = [personal_details_id, related_official_name, related_official_nic_number];
    await pool.query(queries.CREATE_RELATED_OFFICIALS, values);
    return data;
}

exports.updateRelatedOfficial = async (related_official_id, data) => {
    const { related_official_name, related_official_nic_number} = data;
    const values = [related_official_name, related_official_nic_number, related_official_id];   
    const updatedRelatedOfficial = await pool.query(queries.UPDATE_RELATED_OFFICIALS, values);
    if(updatedRelatedOfficial.rowCount === 0){
        throw new Error('Related Official not found');
    }   
    return {message: 'Related Official updated successfully', data};
}
exports.deleteRelatedOfficial = async(related_official_id) =>{
    const deletedRelatedOfficial = await pool.query(queries.SOFT_DELETE_RELATED_OFFICIALS,[related_official_id]);
    if(deletedRelatedOfficial.rowCount === 0){
        throw new Error('Related Official not found');
    }
    return {message: 'Related Official deleted successfully'};
}