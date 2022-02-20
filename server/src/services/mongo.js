const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("Connected to database Successfuly");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  console.log(MONGO_URL);
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
