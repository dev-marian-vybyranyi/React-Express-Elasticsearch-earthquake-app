require("dotenv").config();
const express = require("express");
const client = require("./elasticsearch/client");

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
