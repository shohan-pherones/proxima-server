require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoute");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// mongodb
mongoose.set("strictQuery", false); // optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`connected to mongo and listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
