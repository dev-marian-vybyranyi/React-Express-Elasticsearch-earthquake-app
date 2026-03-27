const express = require("express");
const router = express.Router();
const axios = require("axios");
const client = require("../elasticsearch/client");
require("log-timestamp");

const URL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson`;

router.get("/earthquakes", async function (req, res) {
  console.log("Loading Application...");
  res.json("Running Application...");

  const indexData = async () => {
    try {
      console.log("Retrieving data from the USGS API");

      const response = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      console.log("Data retrieved!");

      const results = response.data.features;
      console.log(`Total earthquakes to index: ${results.length}`);

      console.log("Indexing data...");

      let count = 0;
      for (const earthquake of results) {
        const earthquakeObject = {
          place: earthquake.properties.place,
          time: earthquake.properties.time,
          tz: earthquake.properties.tz,
          url: earthquake.properties.url,
          detail: earthquake.properties.detail,
          felt: earthquake.properties.felt,
          cdi: earthquake.properties.cdi,
          alert: earthquake.properties.alert,
          status: earthquake.properties.status,
          tsunami: earthquake.properties.tsunami,
          sig: earthquake.properties.sig,
          net: earthquake.properties.net,
          code: earthquake.properties.code,
          sources: earthquake.properties.sources,
          nst: earthquake.properties.nst,
          dmin: earthquake.properties.dmin,
          rms: earthquake.properties.rms,
          mag: earthquake.properties.mag,
          magType: earthquake.properties.magType,
          type: earthquake.properties.type,
          longitude: earthquake.geometry.coordinates[0],
          latitude: earthquake.geometry.coordinates[1],
          depth: earthquake.geometry.coordinates[2],
        };

        await client.index({
          index: "earthquakes",
          id: earthquake.id,
          body: earthquakeObject,
          pipeline: "earthquake_data_pipeline",
        });

        count++;
        if (count % 100 === 0) {
          console.log(`Indexed ${count}/${results.length} earthquakes...`);
        }
      }

      console.log("Data has been indexed successfully!");
    } catch (err) {
      console.error("Error during ingestion:", err.message);
      if (err.body) {
        console.error("Elasticsearch error body:", JSON.stringify(err.body, null, 2));
      }
    }

    console.log("Preparing for the next round of indexing...");
  };

  indexData();
});

module.exports = router;
