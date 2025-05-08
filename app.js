const ConnectDb = require("./db/Connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require('dotenv').config()
//middleware
app.use(express.json());
//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;
const start = async () => {
  try {
    await ConnectDb();
    app.listen(port, () => {
      console.log(`server running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start()
