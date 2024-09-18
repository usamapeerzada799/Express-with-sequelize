const Sequelize = require("sequelize");
const db = require("../config/database");
const Test = db.define("test", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});
module.exports = Test;
