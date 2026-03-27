require("dotenv").config();
const client = require("./elasticsearch/client");
const express = require("express");
const cors = require("cors");

const app = express();

const data = require("./data_management/retrieve_and_ingest_data");

app.use("/ingest_data", data);
app.use(cors());

app.get("/results", (req, res) => {
  const { type, mag, location, dateRange, sortOption } = req.query;

  async function sendESRequest() {
    const filter = [];

    if (type && type !== "null") {
      filter.push({ term: { type } });
    }

    if (mag && mag !== "null") {
      filter.push({ range: { mag: { gte: parseFloat(mag) } } });
    }

    if (location && location !== "null") {
      filter.push({ match: { place: location } });
    }

    if (dateRange && dateRange !== "null") {
      filter.push({
        range: {
          "@timestamp": {
            gte: `now-${dateRange}d/d`,
            lt: "now/d",
          },
        },
      });
    }

    try {
      const body = await client.search({
        index: "earthquakes",
        body: {
          sort: [
            {
              mag: {
                order: sortOption || "desc",
              },
            },
          ],
          size: 300,
          query: {
            bool: {
              filter: filter,
            },
          },
        },
      });
      res.json(body.hits.hits);
    } catch (error) {
      console.error("Elasticsearch search error:", error);
      res.status(500).json({ error: "Search failed" });
    }
  }
  sendESRequest();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
