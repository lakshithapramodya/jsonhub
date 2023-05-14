export default function route(app) {
  app.get("/healthCheck", (req, res) => {
    res.json({ health: "App is healthy" });
  });
}
