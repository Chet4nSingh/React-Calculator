import { memo } from "react";

const Button = memo(function Button({ type, children }) {
  return (
    <span className="w-[30%] mb-2 text-3xl font-bold bg-white flex justify-center items-center border hover:text-white hover:border-white hover:bg-slate-950">
      {children}
    </span>
  );
});

export default Button;
