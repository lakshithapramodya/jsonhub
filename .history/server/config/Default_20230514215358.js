import * as dotenv from "dotenv";
dotenv.config();
const config = {
  dbUrl: process.env.MONGODB,
  port: process.env.PORT,
  corsOrigin: process.env.CORS_ORIGIN,
};

export default config;
