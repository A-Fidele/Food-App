const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,
  })
  .then(() => console.log("Database connected !"))
  .catch((error) => console.error("Database connection failed", error));
