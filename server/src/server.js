const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const MONGO_URL =
  "mongodb+srv://admin:admin%40123@nasacluster.7wub8.mongodb.net/nasa?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("Connected to database Successfuly");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const server = http.createServer(app);

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
