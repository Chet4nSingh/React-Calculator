import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";

function reducer(state, action) {
  if (action.type === 'ADD_DIGIT') {
    return {
      ...state,
      currentOperand: `${state.currentOperand}${action.payload}`,
    }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    currentOperand: "",
    previousOperand: "",
    operation: "",
  });

  return (
    <>
      <h1 className="h-screen w-1/3 p-8 pt-40 bg-slate-950 text-white text-8xl">
        React <br />
        Calculator
      </h1>
      <main className="h-screen w-2/3 bg-slate-800 flex justify-center items-center">
        <div id="calculator" className="w-[48%] h-[90%] border bg-slate-950">
          <div
            id="display-screen"
            className="w-[90%] my-6 mx-auto h-[20%] border bg-white"
          >
            <p
              id="display-prev"
              className="w-full h-2/5 text-4xl text-gray-600 p-2 pr-4 flex justify-end items-end"
            >
              
            </p>
            <p
              id="display-curr"
              className="w-full h-3/5 text-6xl p-3 text-black flex justify-end items-end"
            >
              {state.currentOperand}
            </p>
          </div>
          <div
            id="buttons"
            className="w-[90%] h-[70%] flex flex-wrap justify-center mx-auto"
          >
            <OperationButton operation={"AC"} />
            <OperationButton operation={"DEL"} />
            <OperationButton operation={"/"} />     
            <DigitButton dispatch={dispatch} digit={1} />
            <DigitButton dispatch={dispatch} digit={2} />
            <DigitButton dispatch={dispatch} digit={3} />
            <OperationButton operation={"*"} />    
            <DigitButton dispatch={dispatch} digit={4} />
            <DigitButton dispatch={dispatch} digit={5} />
            <DigitButton dispatch={dispatch} digit={6} />  
            <OperationButton operation={"+"} />    
            <DigitButton dispatch={dispatch} digit={7} />
            <DigitButton dispatch={dispatch} digit={8} />
            <DigitButton dispatch={dispatch} digit={9} />  
            <OperationButton operation={"-"} />    
            <DigitButton dispatch={dispatch} digit={"."} />    
            <DigitButton dispatch={dispatch} digit={0} />
            <OperationButton operation={"="} />    
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
