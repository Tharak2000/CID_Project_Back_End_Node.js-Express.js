const pool = require('../db');
const queries = require('../queries/bankDetailsQueries');

exports.getAllBankDetails = async () => {
    const result = await pool.query(queries.GET_ALL_BANK_DETAILS);
    return result.rows;
};

exports.getBankDetailById = async (bank_details_id) => {
    const result = await pool.query(queries.GET_BANK_DETAIL_BY_ID, [bank_details_id]);
    return result.rows[0];
};

exports.createBankDetail = async (data) => {
    const { personal_details_id, account_details, loans, leasing_facilities } = data;
    const values = [personal_details_id, account_details, loans, leasing_facilities];
    const result = await pool.query(queries.CREATE_BANK_DETAIL, values);
    return result.rows[0];
};

exports.updateBankDetail = async (bank_details_id, data) => {
    const {account_details, loans, leasing_facilities} = data;
    const values = [account_details, loans, leasing_facilities, bank_details_id];
    const result = await pool.query(queries.UPDATE_BANK_DETAIL, values);
    return result.rows[0];
};

exports.deleteBankDetail = async (bank_details_id) => {
    const result = await pool.query(queries.SOFT_DELETE_BANK_DETAIL, [bank_details_id]);
    return result.rows[0];
};
