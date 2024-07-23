function App() {
  return (
    <>
    <h1 className="h-screen w-1/3 p-8 pt-40 bg-slate-950 text-white text-8xl">
      React <br />
      Calculator
    </h1>
    <main className="h-screen w-2/3 bg-slate-800 flex justify-center items-center">
      <div id="calculator" className="w-1/2 h-[90%] bg-slate-950">
        <div id="display-screen" className="w-[90%] my-6 mx-auto h-[20%] bg-slate-200">

        </div>
      </div>
    </main>
    </>
  );
}

export default App;
