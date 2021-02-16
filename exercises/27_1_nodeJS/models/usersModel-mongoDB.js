const connection = require('./connection-mongoDB');
const { ObjectId } = require('mongodb');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || password.length < 6) return false;

  return true;
};

const createUser = async (firstName, lastName, email, password) => {
  connection().then((db) => {
    db.collection('users').insertOne({ firstName, lastName, email, password });
  });
};

const allUsers = async () =>
  connection().then((db) =>
    db.collection('users').find({}).toArray());

const userById = async (id) => {
  const user = await connection().then((db) =>
    db.collection('users').findOne(ObjectId(id)));

  if (!user) return null;

  return user
};

const editUser = async (id, firstName, lastName, email, password) => {
  connection().then((db) =>
    db.collection('users').updateOne(
      { _id: ObjectId(id) },
      { $set: { firstName, lastName, email, password } }
    ));
};

const deleteUser = async (id) =>
  connection().then((db) =>
    db.collection('users').deleteOne({ _id: ObjectId(id) }));

module.exports = {
  isValid,
  createUser,
  allUsers,
  userById,
  editUser,
  deleteUser,
};
