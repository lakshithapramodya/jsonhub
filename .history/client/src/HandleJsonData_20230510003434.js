import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { SERVER_ENDPOINT } from "./config/Default";

export default function HandleJsonData() {
  const { url } = useParams();

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

  const urlData = sendRequest().then();
  console.log(urlData);
  return (
    <div>
      <h1>{urlData}</h1>
    </div>
  );
}
