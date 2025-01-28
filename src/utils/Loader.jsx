import React from "react";
import "../styles/Loader2.css";
const Loader = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-white dark:bg-[#101720]">
    <div className="loader">
      <div className="square" id="sq1"></div>
      <div className="square" id="sq2"></div>
      <div className="square" id="sq3"></div>
      <div className="square" id="sq4"></div>
      <div className="square" id="sq5"></div>
      <div className="square" id="sq6"></div>
      <div className="square" id="sq7"></div>
      <div className="square" id="sq8"></div>
      <div className="square" id="sq9"></div>
    </div>
  </div>
  );
};

export default Loader;
