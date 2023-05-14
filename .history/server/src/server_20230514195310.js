import express from "express";
import cors from "cors";
import config from "../config/Default.js";
import route from "./routes/index.js";
import db from "./db.js";

const app = express();

const port = config.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  route(app);
  db();

  console.log(`listening at port ${5000}`);
});
