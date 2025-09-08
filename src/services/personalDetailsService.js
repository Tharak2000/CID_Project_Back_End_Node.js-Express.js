const pool = require('../db');
const queries = require('../queries/personalDetailsQueries');

exports.getAllPersonalDetails = async() => {
  const res = await pool.query(queries.GET_ALL_PERSONAL_DETAILS);
    return res.rows;
};

exports.getPersonalDetailsById = async (personal_details_id) => {
        const result = await pool.query(queries.GET_PERSONAL_DETAILS_BY_ID, [personal_details_id]);
        return result.rows[0];   
}

exports.createPersonalDetails = async (data) => {
        const {first_name, last_name} = data;
        const values = [first_name, last_name];

        await pool.query(queries.CREATE_PERSONAL_DETAILS, values);
        return data;
}

exports.updatePersonalDetails = async (personal_details_id, data) => {
        const {first_name, last_name} = data;
        const values = [first_name, last_name, personal_details_id];

        const updatedPersonalDetails = await pool.query(queries.UPDATE_PERSONAL_DETAILS, values);
        if(updatedPersonalDetails.rowCount === 0){
            throw new Error('Personal Details not found');
        }   
        return {message: 'Personal Details updated successfully', data};
    }


exports.deletePersonalDetails = async(personal_details_id) =>{
        const deletedPersonalDetails = await pool.query(queries.SOFT_DELETE_PERSONAL_DETAILS,[personal_details_id]);
        if(deletedPersonalDetails.rowCount === 0){
            throw new Error('Personal Details not found');
        }
        return {message: 'Personal Details deleted successfully'};
}