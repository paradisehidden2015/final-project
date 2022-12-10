import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/main.css";

function Login({ setlogin, setUser, User }) {
  const navigate = useNavigate();
  const [UserName, setUserName] = useState({ value: "" });
  const [Password, setPassword] = useState({ value: "" });

  const req = async () => {
    if (!UserName.value) {
      document.querySelector("#username").focus();
      toast.warn("Enter username or email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (!Password.value) {
      document.querySelector("#password").focus();
      toast.warn("Enter your password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      try {
        const { data } = await axios.post(
          "http://kzico.runflare.run/user/login",
          {
            email: UserName.value,
            password: Password.value,
          }
        );
        toast.success(data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
        setlogin(true);
        setUser([data.user]);
      } catch (error) {
        // console.log(error.response.data);
        if (error.response.data.success === false) {
          toast.error("Incorrect username/email or password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }
  };

  return (
    <div className="mt-32 flex justify-center">
      <ToastContainer />
      <div className=" flex justify-center shadow-lg sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            {/* /////////////UserName & Email//////////////// */}
            <div className="tooltip" data-tip="Enter username or email">
              <input
                type="text"
                id="username"
                placeholder="Email / UserName"
                className="input input-bordered input-primary w-full text-center mb-5"
                autoFocus
                onChange={(e) =>
                  setUserName((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
              />
            </div>
            {/* ////////////////////Password/////////////////// */}
            <div className="tooltip" data-tip="Enter your password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full text-center"
                onChange={(e) =>
                  setPassword((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
              />
            </div>
            {/* /////////////////////////////////////////////// */}
            <div className="card-actions justify-evenly mt-5">
              <button className="btn sm:w-5/12 lg:w-4/12" onClick={req}>
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
