export default function route(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });
}
