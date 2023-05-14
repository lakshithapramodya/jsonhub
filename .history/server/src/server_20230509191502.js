import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;

app.listen(port, () => {
  console.log(`listening at port ${5000}`);
});
