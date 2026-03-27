const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID,
  },
  auth: {
    apiKey: process.env.ELASTIC_API_KEY,
  },
});

client
  .ping()
  .then((response) => console.log("You are connected to Elasticsearch!"))
  .catch((error) => console.error("Elasticsearch is not connected.", error));

module.exports = client;
