import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col w-full justify-around items-center my-5 p-8 bg-slate-50">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Spinner;
