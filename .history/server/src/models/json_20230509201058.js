import mongoose from "mongoose";
import shortid from "shortid";

const schema = new mongoose.Schema({
  jsonText: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    default: shortid.generate,
  },
});

const json = mongoose.model("JSON", schema);
export default json;
