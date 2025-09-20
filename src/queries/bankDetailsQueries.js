exports.GET_ALL_BANK_DETAILS = 'SELECT * FROM bank_details WHERE is_deleted = FALSE';

exports.GET_BANK_DETAIL_BY_ID = 'SELECT * FROM bank_details WHERE bank_details_id = $1 AND is_deleted = FALSE';

exports.CREATE_BANK_DETAIL = `
    INSERT INTO bank_details (personal_details_id, account_details, loans, leasing_facilities)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
`;

exports.UPDATE_BANK_DETAIL = `
    UPDATE bank_details
    SET account_details = $1, loans = $2, leasing_facilities = $3
    WHERE bank_details_id = $4
    RETURNING *;
`;

exports.SOFT_DELETE_BANK_DETAIL = `
    UPDATE bank_details
    SET is_deleted = TRUE
    WHERE bank_details_id = $1
    RETURNING *;
`;

