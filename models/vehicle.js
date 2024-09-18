const sequelize = require("sequelize");
const db = require("../config/database");
const Vehicle = db.define("vehicle", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
Vehicle.sync({ force: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

module.exports = Vehicle;
// const Sequelize = require("sequelize");
// const db = require("../config/database");
// const Test = db.define("test", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },

//   isCompleted: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: false,
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE,
//   },
// });
// module.exports = Test;
