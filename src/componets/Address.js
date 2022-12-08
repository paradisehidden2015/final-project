import React, { useEffect, useState } from "react";
import "../css/main.css";

function Address() {
  return (
    <div className="mt-32 flex justify-center">
      <div className=" flex justify-center w-full lg:w-9/12 xl:w-7/12 shadow-lg">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">City :</label>
              <div className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                City
              </div>
            </div>
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Address :</label>
              <div className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                Address
              </div>
            </div>
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Postal Code :</label>
              <div className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                Postal Code
              </div>
            </div>
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Phone Number :</label>
              <div className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                Phone Number
              </div>
            </div>
            <div className="card-actions justify-center mt-5">
              <button className="btn w-2/12">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
