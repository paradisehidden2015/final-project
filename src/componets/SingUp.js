import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function SingUp() {
  const navigate = useNavigate();

  //////////////////inputs
  // const inputUserName = document.querySelector("#userName");
  // const inputEmail = document.querySelector("#email");
  // const inputPassword = document.querySelector("#password");
  // const inputConfirmPassword = document.querySelector("#confirmPassword");
  // const inputMobile = document.querySelector("#mobile");
  /////////////////
  const req = async () => {
    try {
      //////////////////inputs
      const inputUserName = document.querySelector("#userName");
      const inputEmail = document.querySelector("#email");
      const inputPassword = document.querySelector("#password");
      const inputMobile = document.querySelector("#mobile");
      /////////////////
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: inputUserName.value.toString(),
          email: inputEmail.value.toString(),
          password: inputPassword.value.toString(),
          mobile: inputMobile.value.toString(),
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="mt-32 flex justify-center">
      <div className=" flex justify-center shadow-lg sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <input
              type="text"
              placeholder="UserName"
              id="userName"
              className="input input-bordered input-primary w-full text-center mb-5"
              autoFocus
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="mobile"
              placeholder="Mobile"
              id="mobile"
              className="input input-bordered input-primary w-full text-center"
            />
            <div className="card-actions justify-center mt-5">
              <button
                className="btn sm:w-5/12 lg:w-4/12"
                // onClick={() => navigate("/Login")}
                // onClick={() => change()}
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

export default SingUp;
