import React from "react";

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-secondary hover:bg-accent py-2 px-7 text-white font-semibold rounded-lg  duration-300">
      {children}
    </button>
  );
};

export default Button;
