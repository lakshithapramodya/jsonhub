export default function route(app) {
  // health check
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post(":url", (req, res) => {
    console.log(req.params.url);
  });
}
