import { createJson, getJson } from "../controllers/json.js";

export default function route(app) {
  // Health check
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  // Create data in the db
  app.post("/api/json", createJson);

  // Find data with url
  app.post("/api/url/json", getJson);
}
