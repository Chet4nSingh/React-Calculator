import { memo } from "react";

const OperationButton = memo(function OperationButton({ dispatch, operation }) {
  return (
    <span
      onClick={() => dispatch({ type: "OPERATE", payload: operation })}
      className="w-[25%] text-3xl font-bold bg-white flex justify-center items-center border-2 border-slate-950 hover:text-white hover:border-white hover:bg-slate-950"
    >
      {operation}
    </span>
  );
});

export default OperationButton;
