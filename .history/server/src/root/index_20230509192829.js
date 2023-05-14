export default function route(app) {
  app.get("/healthCheck", (req, res) => {
    res.json({"App is healthy"});
  });
}
