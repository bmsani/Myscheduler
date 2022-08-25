import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const ButtonSpinner = () => {
  const [loading, setLoading] = useState(true);

  return (
    <button className="bg-primary py-2 px-8 rounded text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer">
      <PulseLoader color={"#fff"} loading={loading} size={10} />
    </button>
  );
};

export default ButtonSpinner;
