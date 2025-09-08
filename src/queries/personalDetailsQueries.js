exports.GET_ALL_PERSONAL_DETAILS = 'SELECT * FROM personal_details WHERE is_deleted = FALSE';

exports.GET_PERSONAL_DETAILS_BY_ID = 'SELECT * FROM personal_details WHERE personal_details_id=$1 AND is_deleted = FALSE';

exports.CREATE_PERSONAL_DETAILS = `
  INSERT INTO personal_details 
  (first_name, last_name) 
  VALUES ($1, $2)
  RETURNING *`
;

exports.UPDATE_PERSONAL_DETAILS = `
  UPDATE personal_details 
  SET first_name=$1, last_name=$2  
  WHERE personal_details_id=$3
  RETURNING *`
  ;  

exports.SOFT_DELETE_PERSONAL_DETAILS = 
    'UPDATE personal_details SET is_deleted = TRUE WHERE personal_details_id = $1 RETURNING *';
