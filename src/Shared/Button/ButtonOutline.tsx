import React from "react";
type ButtonProps = {
  children: JSX.Element | JSX.Element[];
};
const ButtonOutline = ({ children }: ButtonProps) => {
  return (
    <button className="bg-white hover:bg-secondary hover:text-white py-[8px] px-7 text-secondary border border-secondary font-semibold rounded-full  duration-300">
      {children}
    </button>
  );
};

export default ButtonOutline;
