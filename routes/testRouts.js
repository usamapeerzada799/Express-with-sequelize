const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");
// Route to get all todos
router.get("/", testController.getAllTest);
// Route to create a new todo
router.post("/", testController.createTest);
// Route to get a todo by ID
router.get("/:id", testController.getTestById);
// Route to update a todo by ID
router.put("/:id", testController.updateTest);
// Route to delete a todo by ID
router.delete("/:id", testController.deleteTest);
module.exports = router;
