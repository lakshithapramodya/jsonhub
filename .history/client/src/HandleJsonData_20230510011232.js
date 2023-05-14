import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_ENDPOINT } from "./config/Default";

export default function HandleJsonData() {
  const { url } = useParams();
  const [json, setJson] = useState([]);

  const sendRequest = async () => {
    const res = await axios
      .post(`${SERVER_ENDPOINT}/api/url/json`, {
        url: url,
      })
      .then()
      .catch((err) => console.log(err));

    const data = res.data;
    return data;
  };

  const urlData = sendRequest().then((data) => {
    console.log(JSON.parse(data.jsonText));
    setJson(JSON.parse(data.jsonText));
    return JSON.parse(data.jsonText);
  });

  return urlData;
}
