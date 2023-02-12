require("dotenv").config();

const express = require("express");
const projectRoutes = require("./routes/projectRoute");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
