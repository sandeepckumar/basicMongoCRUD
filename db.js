const mongoose = require("mongoose");

const connect = mongoose.connect(
  process.env.PROD_MONGO,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("DB CONNECTION FAILED");
      throw err;
    }
    console.log("DB CONNECTED");
  }
);

module.exports = connect;
