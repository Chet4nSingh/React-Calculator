import Button from "./components/Button";

function App() {
  return (
    <>
      <h1 className="h-screen w-1/3 p-8 pt-40 bg-slate-950 text-white text-8xl">
        React <br />
        Calculator
      </h1>
      <main className="h-screen w-2/3 bg-slate-800 flex justify-center items-center">
        <div id="calculator" className="w-[48%] h-[90%] bg-slate-950">
          <div
            id="display-screen"
            className="w-[90%] my-6 mx-auto h-[20%] bg-slate-200"
          ></div>
          <div
            id="buttons"
            className="w-[90%] h-[70%] flex flex-wrap justify-between gap-2 mx-auto"
          >
            <Button>AC</Button>
            <Button>DEL</Button>
            <Button>/</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>*</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>+</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>-</Button>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
