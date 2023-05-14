import { useState } from "react";
import { SERVER_ENDPOINT } from "./config/Default";
import axios from "axios";

function App() {
  const [input, setInput] = useState([]);
  const [url, setUrl] = useState("");

  const sendRequest = async () => {
    const res = await axios
      .post(`${SERVER_ENDPOINT}/api/json`, {
        text: input,
      })
      .then()
      .catch((err) => console.log(err));
    const data = res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((res) => {
      console.log(res.url);
      res && setInput([]);
      setUrl(res.url);
    });
  };

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  return (
    <div className="min-w-full min-h-screen flex flex-col">
      {url && (
        <a href={`${SERVER_ENDPOINT}/${url}`}>{`${SERVER_ENDPOINT}/${url}`}</a>
      )}
      <div className="flex flex-col m-auto w-full md:w-1/2 items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full space-y-2 mr-10">
          <h1 className="">JSON Keeper</h1>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rows={18}
            className="border-2 w-full rounded"
          />
          <button
            className="bg-blue-500 p-2 px-3 rounded text-white disabled:opacity-50"
            disabled={!isJsonString(input)}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
