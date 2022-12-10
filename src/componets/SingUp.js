import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingUp() {
  const navigate = useNavigate();

  const [UserName, setUserName] = useState({
    value: "",
    error: "Username is invalid",
    isTouched: false,
  });
  const [Email, setEmail] = useState({
    value: "",
    error: "Email is invalid",
    isTouched: false,
  });
  const [Password, setPassword] = useState({
    value: "",
    error: "Password is invalid",
    isTouched: false,
  });
  const [ConfirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "Confirm Password is invalid",
    isTouched: false,
  });
  const [Mobile, setMobile] = useState({
    value: "",
    error: "Mobile is invalid",
    isTouched: false,
  });

  const req = async () => {
    const verifiUserName = /^[a-z0-9_-]{5,30}$/.test(UserName.value);
    const verifiEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email.value);
    const verifiPassword =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        Password.value
      );
    const verifiConfirmPassword = ConfirmPassword.value == Password.value;
    const verifiMobile = /^(09)[\w-]{9}$/.test(Mobile.value);

    if (
      verifiUserName &&
      verifiEmail &&
      verifiPassword &&
      verifiConfirmPassword &&
      verifiMobile
    ) {
      try {
        const { data } = await axios.post(
          "http://kzico.runflare.run/user/signup",
          {
            username: UserName.value,
            email: Email.value,
            password: Password.value,
            mobile: Mobile.value,
          }
        );
        // console.log(data.message);
        toast.success(data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      } catch (error) {
        // console.log(error.response.data.message);
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="mt-32 flex justify-center">
      <ToastContainer />
      <div className=" flex justify-center shadow-lg sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            {/* /////////////UserName//////////////// */}
            <div
              className="tooltip"
              data-tip="Username must be at least 5 characters long"
            >
              <input
                type="text"
                placeholder="UserName"
                id="userName"
                className="input input-bordered input-primary w-full text-center mb-5"
                autoFocus
                onChange={(e) =>
                  setUserName((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
                onBlur={() => {
                  setUserName((last) => {
                    const help = { ...last };
                    help.isTouched = true;
                    return { ...help };
                  });
                }}
              />
            </div>
            {!/^[a-z0-9_-]{5,30}$/.test(UserName.value) &&
              UserName.isTouched && (
                <span className="absolute top-20">{UserName.error}</span>
              )}
            {/* /////////////Email//////////////// */}
            <div className="tooltip" data-tip="Email must have @ and . be">
              <input
                type="email"
                placeholder="Email"
                id="email"
                jhddndddd
                className="input input-bordered input-primary w-full text-center mb-5"
                onChange={(e) =>
                  setEmail((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
                onBlur={() => {
                  setEmail((last) => {
                    const help = { ...last };
                    help.isTouched = true;
                    return { ...help };
                  });
                }}
              />
            </div>
            {!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email.value) &&
              Email.isTouched && (
                <span className="absolute top-[156px]">{Email.error}</span>
              )}
            {/* /////////////Password//////////////// */}
            <div
              className="tooltip"
              data-tip="The password must be at least 8 characters long, including: a special character {!,@,#,$,%,^,&,*}, uppercase and lowercase letters, and numbers."
            >
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="input input-bordered input-primary w-full text-center mb-5"
                onChange={(e) =>
                  setPassword((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
                onBlur={() => {
                  setPassword((last) => {
                    const help = { ...last };
                    help.isTouched = true;
                    return { ...help };
                  });
                }}
              />
            </div>
            {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              Password.value
            ) &&
              Password.isTouched && (
                <span className="absolute top-[231px]">{Password.error}</span>
              )}
            {/* /////////////confirm Password//////////////// */}
            <div
              className="tooltip"
              data-tip="The password confirmation must be the same as the password"
            >
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                className={`input input-bordered input-primary w-full text-center mb-5 ${
                  ConfirmPassword.value == Password.value && "k"
                }`}
                onChange={(e) =>
                  setConfirmPassword((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
                onBlur={() => {
                  setConfirmPassword((last) => {
                    const help = { ...last };
                    help.isTouched = true;
                    return { ...help };
                  });
                }}
              />
            </div>
            {ConfirmPassword.value !== Password.value && (
              <span className="absolute top-[308px]">
                {ConfirmPassword.error}
              </span>
            )}
            {/* /////////////Mobile//////////////// */}
            <div
              className="tooltip"
              data-tip="Mobile number must have 11 numbers and start with 09"
            >
              <input
                type="mobile"
                placeholder="Mobile"
                id="mobile"
                className="input input-bordered input-primary w-full text-center"
                onChange={(e) =>
                  setMobile((last) => {
                    const help = { ...last };
                    help.value = e.target.value;
                    return { ...help };
                  })
                }
                onBlur={() => {
                  setMobile((last) => {
                    const help = { ...last };
                    help.isTouched = true;
                    return { ...help };
                  });
                }}
              />
            </div>
            {!/^(09)[\w-]{9}$/.test(Mobile.value) && Mobile.isTouched && (
              <span className="absolute top-96">{Mobile.error}</span>
            )}
            {/* /////////////button//////////////// */}
            <div className="card-actions justify-center mt-5">
              <button className="btn sm:w-5/12 lg:w-4/12" onClick={req}>
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
