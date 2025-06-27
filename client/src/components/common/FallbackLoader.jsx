import React from "react";
import { DNA } from "react-loader-spinner";

const FallbackLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DNA visible={true} height="150" width="150" ariaLabel="dna-loading" />
    </div>
  );
};

export default FallbackLoader;
