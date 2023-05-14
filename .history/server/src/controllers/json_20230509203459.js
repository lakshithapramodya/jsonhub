import json from "../models/json.js";

export async function createJson(req, res) {
  const { text } = req.body;

  try {
    const newJson = await json.create({
      jsonText: text,
    });
    res.send(newJson);
  } catch (err) {
    console.log(err);
  }
}
