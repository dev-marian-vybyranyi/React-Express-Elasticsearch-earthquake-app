require("dotenv").config();
const express = require("express");
const client = require("./elasticsearch/client");

const app = express();

const PORT = 3001;

const data = require("./data_management/retrieve_and_ingest_data");

app.use("/ingest_data", data);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
