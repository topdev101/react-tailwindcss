import React from "react";

const PlayButton = () => {
  return (
    <button
      type="button"
      className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center justify-center"
    >
      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent"></div>
      <span className="sr-only">Play</span>
    </button>
  );
};

export default PlayButton;
