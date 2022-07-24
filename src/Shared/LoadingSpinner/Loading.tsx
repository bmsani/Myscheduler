import React from "react";
import { useState } from "react";
import { GridLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <GridLoader color={"#02254b"} loading={loading} size={10} />
    </div>
  );
};

export default Loading;
