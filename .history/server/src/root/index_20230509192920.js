export default function route(app) {
  // health check
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });
}
