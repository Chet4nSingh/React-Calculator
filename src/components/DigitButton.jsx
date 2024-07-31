import { memo } from "react";

const DigitButton = memo(function DigitButton({ dispatch, digit }) {
  return (
    <span onClick={() => dispatch({ type: 'ADD_DIGIT', payload: digit })} className="w-[25%] text-3xl font-bold bg-white flex justify-center items-center border-2 border-slate-950 hover:text-white hover:border-white hover:bg-slate-950">
      {digit}
    </span>
  );
});

export default DigitButton;
