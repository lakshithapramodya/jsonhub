function App() {
  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <form className="flex flex-col m-auto w-full items-center justify-center">
        <textarea rows={10} className="border-2 w-[50%]" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
