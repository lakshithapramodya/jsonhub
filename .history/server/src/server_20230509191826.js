import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { port } from "../config/Default.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`listening at port ${5000}`);
});
