const Sequelize = require("../config/database");
const Todo = require("./todo");
const Test = require("./test");
Todo.hasOne(Test);
Sequelize.sync({ force: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
