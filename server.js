require("dotenv").config();

const express = require("express");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
