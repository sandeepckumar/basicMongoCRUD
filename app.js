require("dotenv").config();
require("./db");
const express = require("express");
const app = express();

const authRouter = require("./routes/auth.route");

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
