import { createJson } from "../controllers/json.js";

export default function route(app) {
  // health check
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.get("/:url", (req, res) => {
    res.send(req.params.url);
  });

  app.post("/api/json", createJson);
}
