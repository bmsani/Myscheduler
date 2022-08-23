import React from "react";

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-secondary hover:bg-primary py-[10px] px-7 text-white font-semibold rounded-full  duration-300">
      {children}
    </button>
  );
};

export default Button;
