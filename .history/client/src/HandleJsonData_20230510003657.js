import axios from "axios";
import React, { useEffect } from "react";
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

  useEffect(() => {
    const urlData = sendRequest().then((data) => console.log(data.jsonText));
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
