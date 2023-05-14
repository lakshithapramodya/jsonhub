import { useState } from "react";
import { SERVER_ENDPOINT } from "./config/Default";
import axios from "axios";

function App() {
  const [input, setInput] = useState();

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
    sendRequest().then((res) => console.log(res));
  };

  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <form className="flex flex-col m-auto w-full items-center justify-center space-y-2">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={10}
          className="border-2 w-[50%]"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
