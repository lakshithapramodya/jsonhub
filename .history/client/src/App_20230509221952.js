import { useState } from "react";

function App() {
  const [input, setInput] = useState();

  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <form className="flex flex-col m-auto w-full items-center justify-center space-y-2">
        <textarea rows={10} className="border-2 w-[50%]" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
