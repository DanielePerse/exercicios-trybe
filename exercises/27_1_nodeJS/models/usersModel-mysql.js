const connection = require('./connection-mysql');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || password.length < 6) return false;

  return true;
};

const createUser = async (firstName, lastName, email, password) => {
  connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  );
};

const allUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM users_crud.users;',
  );

  return users.map(({ id, first_name, last_name, email, password }) => ({
    id,
    firstName: first_name,
    lastName: last_name,
    email,
    password,    
  }));
}

const userById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users_crud.users WHERE id = ?;', [id]);

  if (!user) return null;

  return {
    id: user[0].id,
    firstName: user[0].first_name,
    lastName: user[0].last_name,
    email: user[0].email,
    password: user[0].password,
  };
};

const editUser = async (id, firstName, lastName, email, password) => {
  connection.execute('UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;',
  [firstName, lastName, email, password, id]);
};

const deleteUser = async (id) => {
  connection.execute('DELETE FROM users_crud.users WHERE id = ?;', [id]);
};

module.exports = {
  isValid,
  createUser,
  allUsers,
  userById,
  editUser,
  deleteUser,
};
