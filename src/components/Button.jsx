import { memo } from "react";

const Button = memo(function Button({ type, children }) {
  let customCSS = "w-[25%]";
  if (children === "AC" || children === "=") {
    customCSS = "w-[50%]";
  }

  return (
    <span
      className={
        customCSS +
        " text-3xl font-bold bg-white flex justify-center items-center border-2 border-slate-950 hover:text-white hover:border-white hover:bg-slate-950"
      }
    >
      {children}
    </span>
  );
});

export default Button;
