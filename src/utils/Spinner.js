import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <svg
        className="animate-spin"
        height="100"
        width="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="purple"
          strokeWidth="8"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="100"
        />
      </svg>
    </div>
  );
};

export default Spinner;
