import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "../../css/main.css";
import { getChangeProfile } from "../../redux/action";
function ChangeProfile({ User }) {
  const [Profileing, setProfileing] = useState([]);
  const dispatch = useDispatch();
  // const { data, error } = useSelector((state) => state.ChangeProfile);
  ///////////////////////////////////////////////////////////////////////
  const inputFirstName = document.querySelector("#FirstName");
  const inputLastName = document.querySelector("#LastName");
  const inputGender = document.querySelector("#Gender");
  const inputAge = document.querySelector("#Age");
  const inputCity = document.querySelector("#City");
  ///////////////////////////////////////////////////////////////////////

  function req() {
    if (
      (inputFirstName.value,
      inputLastName.value,
      inputGender.value,
      inputAge.value,
      inputCity.value)
    ) {
      dispatch(getChangeProfile(Profileing));
      toast.success("Profile edit successfully registered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Complete the information", {
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

  return (
    <div className="w-full">
      <ToastContainer />
      <div className="sm:flex -ml-96 w-80 sm:w-80 sm:-ml-56 md:w-80 md:-ml-12 lg:w-10/12 lg:ml-5 xl:w-7/12 xl:ml-32 2xl:w-4/12 2xl:ml-96">
        <div className="card w-full bg-primary text-primary-content mt-72 sm:mt-32 shadow-lg">
          <div className="card-body">
            <input
              type="text"
              id="FirstName"
              placeholder="First Name"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) =>
                setProfileing((last) => {
                  const help = JSON.parse(JSON.stringify(last));
                  help.FirstName = e.target.value;
                  return { ...help };
                })
              }
            />
            <input
              type="text"
              id="LastName"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) =>
                setProfileing((last) => {
                  const help = JSON.parse(JSON.stringify(last));
                  help.LastName = e.target.value;
                  return { ...help };
                })
              }
            />
            <span
              id="Gender"
              className="input input-primary w-full text-center mb-5 flex"
            >
              <div className="form-control inline-block w-full">
                <label className="label cursor-pointer inline-flex mr-10 w-20">
                  <span className="label-text">female</span>
                  <input
                    type="radio"
                    value="female"
                    name="radio-2"
                    className="radio radio-primary"
                    onChange={(e) =>
                      setProfileing((last) => {
                        const help = JSON.parse(JSON.stringify(last));
                        help.Gender = e.target.value;
                        return { ...help };
                      })
                    }
                  />
                </label>
                <label className="label cursor-pointer inline-flex w-20">
                  <span className="label-text">male</span>
                  <input
                    type="radio"
                    value="male"
                    name="radio-2"
                    className="radio radio-primary"
                    onChange={(e) =>
                      setProfileing((last) => {
                        const help = JSON.parse(JSON.stringify(last));
                        help.Gender = e.target.value;
                        return { ...help };
                      })
                    }
                  />
                </label>
              </div>
            </span>

            <input
              type="text"
              id="Age"
              placeholder="Age"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) =>
                setProfileing((last) => {
                  const help = JSON.parse(JSON.stringify(last));
                  help.Age = e.target.value;
                  return { ...help };
                })
              }
            />
            <input
              type="text"
              id="City"
              placeholder="City"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) =>
                setProfileing((last) => {
                  const help = JSON.parse(JSON.stringify(last));
                  help.City = e.target.value;
                  return { ...help };
                })
              }
            />
            <div className="card-actions justify-evenly mt-5">
              <button className="btn sm:w-5/12 lg:w-4/12" onClick={() => req()}>
                done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfile;
