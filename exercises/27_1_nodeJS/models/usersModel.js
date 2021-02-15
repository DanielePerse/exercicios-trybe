const connection = require('./connection');

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

module.exports = {
  isValid,
  createUser,
};
