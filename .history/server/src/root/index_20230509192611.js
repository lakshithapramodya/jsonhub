export default function route(app) {
  app.get("/healthCheck", (req, res) => {
    console.log("App is healthy");
  });
}
