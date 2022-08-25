import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const ButtonSpinner = () => {
  const [loading, setLoading] = useState(true);

  return <PulseLoader color={"#fff"} loading={loading} size={10} />;
};

export default ButtonSpinner;
