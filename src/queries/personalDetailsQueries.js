exports.GET_ALL_PERSONAL_DETAILS = 'SELECT * FROM personal_details WHERE is_deleted = FALSE';

exports.GET_PERSONAL_DETAILS_BY_ID = 'SELECT * FROM personal_details WHERE personal_details_id=$1 AND is_deleted = FALSE';


exports.GET_PERSONAL_AND_RELATED_OFFICIALS_BY_ID = `
  SELECT 
    pd.personal_details_id,
    pd.first_name,
    pd.last_name,
    pd.is_deleted,
    COALESCE(
      json_agg(
        json_build_object(
          'related_officials_id', ro.related_officials_id,
          'related_official_name', ro.related_official_name,
          'related_official_nic_number', ro.related_official_nic_number,
          'ro_is_deleted', ro.is_deleted
        )
      ) FILTER (WHERE ro.related_officials_id IS NOT NULL), '[]'
    ) AS related_officials
  FROM personal_details pd
  LEFT JOIN related_officials ro 
    ON pd.personal_details_id = ro.personal_details_id 
    AND ro.is_deleted = FALSE
  WHERE pd.personal_details_id = $1
    AND pd.is_deleted = FALSE
  GROUP BY pd.personal_details_id, pd.first_name, pd.last_name, pd.is_deleted;
`;

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


exports.GET_RELATED_OFFICIALS_BY_PERSONAL_DETAILS_ID = 'SELECT * FROM related_officials WHERE personal_details_id=$1 AND is_deleted = FALSE';