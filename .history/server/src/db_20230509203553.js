import mongoose from "mongoose";
import config from "../config/Default";

export default async function db() {
  const dbUrl = config.dbUrl;

  try {
    await mongoose
      .connect(dbUrl, {
        useNewUrlParser: true,
        useUndefinedTopology: true,
      })
      .then(() => console.log("Connected to db"));
  } catch (err) {
    console.log(err);
  }