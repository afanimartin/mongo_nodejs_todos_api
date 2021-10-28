const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectToDB = require("./lib/db/connect");
const router = require("./lib/routes/routes");
const notFound = require("./lib/middleware/notFound");
const errorHandler = require("./lib/middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use("/tasks", router);
app.use(notFound);
app.use(errorHandler);

const startApp = async () => {
  try {
    await connectToDB(process.env.MONGODB_URI);

    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
