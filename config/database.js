const Sequelize = require("sequelize");
module.exports = new Sequelize("testdb", "postgres", null, {
  host: "localhost",
  dialect: "postgres", // Change to your database type
});
