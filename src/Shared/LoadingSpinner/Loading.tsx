import React from "react";
import { useState } from "react";
import { GridLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <GridLoader color={"#9c8321"} loading={loading} size={10} />
    </div>
  );
};

export default Loading;
