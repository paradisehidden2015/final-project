import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="mt-52 flex justify-center">
      <div className="h-screen">
        <div className="w-full text-center">
          <div className="w-full h-24 sm:h-40 lg:h-80 mb-20">
            <h1 className="text-[100px] sm:text-[150px] lg:text-[230px] font-bold Oops">
              Oops!
            </h1>
          </div>
          <h2 className="text-black text-3xl font-semibold">
            404 - Page not found
          </h2>
          <p className="my-10">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <button
            className="bottom-5 btn btn-primary hover:bg-transparent hover:border-4 hover:scale-105 hover:text-violet-300 transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/")}
          >
            go to home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
