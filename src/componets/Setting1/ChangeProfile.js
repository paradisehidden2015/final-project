import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../../css/main.css";
function ChangeProfile({ User }) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const [City, setCity] = useState("");
  const inputFirstName = document.querySelector("#FirstName");
  const inputLastName = document.querySelector("#LastName");
  const inputGender = document.querySelector("#Gender");
  const inputAge = document.querySelector("#Age");
  const inputCity = document.querySelector("#City");

  const req = async () => {
    if (
      (inputFirstName.value,
      inputLastName.value,
      inputGender.value,
      inputAge.value,
      inputCity.value)
    ) {
      try {
        const { data } = await axios.put(
          "http://kzico.runflare.run/user/change-profile",
          {
            firstname: FirstName,
            lastname: LastName,
            gender: Gender,
            age: Age,
            city: City,
          },
          {
            headers: {
              authorization: `Bearer ${User[0].token}`,
            },
          }
        );
        // console.log(data);
        console.log(data.message);
        toast.success(data.message, {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        console.log(error.response.data);
        toast.error("Complete the information", {
          position: "top-center",
          autoClose: 7000,
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
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="LastName"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) => setLastName(e.target.value)}
            />
            <select
              id="Gender"
              className="select select-bordered input input-primary w-full text-center mb-5"
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled selected>
                Gender
              </option>
              <option>male</option>
              <option>female</option>
            </select>
            <input
              type="text"
              id="Age"
              placeholder="Age"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              id="City"
              placeholder="City"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="card-actions justify-evenly mt-5">
              <button className="btn sm:w-5/12 lg:w-4/12" onClick={req}>
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
