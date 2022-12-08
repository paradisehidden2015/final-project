import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="mt-32 flex justify-center">
      <div className=" flex justify-center shadow-lg sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <input
              type="text"
              placeholder="Email / UserName"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full text-center"
            />
            <div className="card-actions justify-evenly mt-5">
              <button
                className="btn sm:w-5/12 lg:w-4/12"
                onClick={() => navigate("/")}
              >
                log in
              </button>
              <button
                className="btn sm:w-5/12 lg:w-4/12"
                onClick={() => navigate("/SingUp")}
              >
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
