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
      <div className="flex flex-col mx-auto mt-6 w-full sm:w-[80%] md:w-[70%] lg:w-[58%] items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full space-y-4 px-5">
          <h1 className="text-[2.5rem] font-semibold text-gray-700">
            JSON Keeper
          </h1>
          <p className="text-gray-700 text-lg">
            A simple JSON store for your mobile and web app
          </p>
          <textarea
            placeholder="Enter a valid JSON here"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rows={14}
            className={`border border-gray-300 w-full rounded p-2 px-4 text-lg font-semibold focus:outline-none`}
          />
          <button
            className="bg-blue-500 p-2 px-3 w-[4.5rem] rounded font-semibold text-lg text-white disabled:opacity-70"
            disabled={!isJsonString(input)}
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
