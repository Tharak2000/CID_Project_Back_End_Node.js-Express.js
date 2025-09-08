exports.GET_ALL_RELATED_OFFICIALS = 'SELECT * FROM related_officials WHERE is_deleted = FALSE';

exports.GET_RELATED_OFFICIALS_BY_ID = 'SELECT * FROM related_officials WHERE related_officials_id=$1 AND is_deleted = FALSE';

exports.CREATE_RELATED_OFFICIALS = `
  INSERT INTO related_officials 
  (personal_details_id,related_official_name, related_official_nic_number) 
  VALUES ($1, $2, $3)
  RETURNING *`
;

exports.UPDATE_RELATED_OFFICIALS = `
  UPDATE related_officials 
  SET related_official_name=$1, related_official_nic_number=$2  
  WHERE related_officials_id=$3
  RETURNING *`
  ;

exports.SOFT_DELETE_RELATED_OFFICIALS = 
    'UPDATE related_officials SET is_deleted = TRUE WHERE related_officials_id = $1 RETURNING *';