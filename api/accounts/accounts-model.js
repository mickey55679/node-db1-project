// this will be used in the get all endpoint
const db = require("../../data/db-config");
// door to the database
const getAll = () => {
  // select * from accounts;
  return db("accounts");
  //this will perform a select * from accounts underneath and return a collection of accounts
};

const getById = (id) => {
  //select * from accounts where id = 1;
  return db("accounts").where("id", id).first();
};

const create = async (account) => {
  // insert into accounts (name, budget) values ('foo', 1000);
  const [id] = await db("accounts").insert(account);
  return getById(id);
};

const updateById = (id, account) => {};

const deleteById = (id) => {
  return db("accounts").where("id", id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
