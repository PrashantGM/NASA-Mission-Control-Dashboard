const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://admin:admin%40123@nasacluster.7wub8.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("Connected to database Successfuly");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
