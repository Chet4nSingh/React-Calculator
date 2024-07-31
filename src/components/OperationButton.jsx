import { memo } from "react";

const OperationButton = memo(function OperationButton({ operation }) {
  let customCSS = "w-[25%]";
  if (operation === "AC" || operation === "=") {
    customCSS = "w-[50%]";
  }

  return (
    <span
      className={
        customCSS +
        " text-3xl font-bold bg-white flex justify-center items-center border-2 border-slate-950 hover:text-white hover:border-white hover:bg-slate-950"
      }
    >
      {operation}
    </span>
  );
});

export default OperationButton;
