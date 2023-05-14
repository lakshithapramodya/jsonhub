import * as dotenv from "dotenv";
dotenv.config();
const config = {
  dbUrl: process.env.MONGODB,
  port: process.env.PORT,
};

export default config;
