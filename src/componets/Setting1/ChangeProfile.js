import React, { useEffect, useState } from "react";
import "../../css/main.css";

function ChangeProfile() {
  return (
    <div className="w-full">
      <div className="sm:flex -ml-96 w-80 sm:w-80 sm:-ml-56 md:w-80 md:-ml-12 lg:w-10/12 lg:ml-5 xl:w-7/12 xl:ml-32 2xl:w-4/12 2xl:ml-96">
        <div className="card w-full bg-primary text-primary-content mt-72 sm:mt-32 shadow-lg">
          <div className="card-body">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="text"
              placeholder="Gender"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="text"
              placeholder="Age"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered input-primary w-full text-center mb-5"
            />
            <div className="card-actions justify-evenly mt-5">
              <button className="btn sm:w-5/12 lg:w-4/12">done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfile;
