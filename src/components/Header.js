import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="">
      <div className="w-screen-xl mx-auto">
        <div className="px-16 lg:px-10 flex flex-row justify-between items-center">
          <div className="">
            <Link to="/">
              <h2>Studio Willow</h2>
            </Link>
          </div>
          <div>
            <button className="border-solid border border-gray-900 w-16 h-16 rounded-full">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};