import { createJson } from "../controllers/json.js";

export default function route(app) {
  // Health check
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.get("/:url", (req, res) => {
    res.send(req.params.url);
  });

  // Create data in the db
  app.post("/api/json", createJson);

  // Find data with url
  app.get("api/url/json", getJson);
}
