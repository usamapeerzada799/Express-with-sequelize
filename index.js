const express = require("express");
const app = express();
const db = require("./config/database");
const todoRoutes = require("./routes/todoRouts");
const testRoutes = require("./routes/testRouts");
// Connect to the database
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database:", err));
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/todo", todoRoutes);
app.use("/test", testRoutes);
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
