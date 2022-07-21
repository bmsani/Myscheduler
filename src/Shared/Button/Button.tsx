import React from "react";

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-secondary py-2 px-4 text-white font-semibold rounded hover:bg-[#01aba8] duration-300">
      {children}
    </button>
  );
};

export default Button;
