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

export async function getJson(req, res) {
  const { url } = req.body;
  const jsonData = await json.findOne({ url });

  if (!jsonData) return res.status(404);
  res.send(jsonData);
}

export async function getUserRequest(req, res) {
  const { url } = req.params;
  const jsonData = await json.findOne({ url });

  res.json(jsonData.jsonText);
}
