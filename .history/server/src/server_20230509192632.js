import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "../config/Default.js";
import route from "./root/index.js";

const app = express();

const port = config.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  route(app);
  console.log(`listening at port ${5000}`);
});
