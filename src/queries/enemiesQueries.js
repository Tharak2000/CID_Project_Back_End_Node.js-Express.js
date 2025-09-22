exports.GET_ALL_ENEMIES = 'SELECT * FROM enemies WHERE is_deleted = FALSE';

exports.GET_ENEMY_BY_ID = 'SELECT * FROM enemies WHERE enemies_id = $1 AND is_deleted = FALSE';   

exports.CREATE_ENEMY = `
  INSERT INTO enemies 
  (personal_details_id, enemy_individuals, enemy_gangs) 
  VALUES ($1, $2, $3)
  RETURNING *`
;

exports.UPDATE_ENEMY = `
  UPDATE enemies 
  SET enemy_individuals=$1, enemy_gangs=$2  
  WHERE enemies_id=$3
  RETURNING *`
  ;

exports.SOFT_DELETE_ENEMY = 
    'UPDATE enemies SET is_deleted = TRUE WHERE enemies_id = $1 RETURNING *'; 
