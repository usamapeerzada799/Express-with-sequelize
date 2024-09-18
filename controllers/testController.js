const Test = require("../models/test");
// Controller method to get all todos
exports.getAllTest = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Controller method to create a new todo
exports.createTest = async (req, res) => {
  const { name } = req.body;
  try {
    const newTest = await Test.create({
      name,
    });
    res.status(201).json(newTest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Controller method to get a todo by ID
exports.getTestById = async (req, res) => {
  const id = req.params.id;
  try {
    const test = await Test.findByPk(id);
    if (test) {
      res.json(test);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Controller method to update a todo by ID
exports.updateTest = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const test = await Test.findByPk(id);
    if (test) {
      test.name = name;

      await test.save();
      res.json(test);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Controller method to delete a todo by ID
exports.deleteTest = async (req, res) => {
  const id = req.params.id;
  try {
    const test = await Test.findByPk(id);
    if (test) {
      await test.destroy();
      res.json(test);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
