import React, { useEffect, useState } from "react";
import "../css/main.css";

function Profile() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-4/6 lg:w-3/6 2xl:w-2/6">
        <div className="card w-full bg-primary text-primary-content mt-32 sm:mt-32 shadow-lg">
          <div className="card-body">
            <div className="avatar mb-10 flex justify-center transition duration-700">
              <div className="w-24 rounded-full ring ring-black hover:scale-125 hover:ring-red-900 ring-offset-base-100 ring-offset-2 transition duration-700">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="block">
              <div className="flex justify-start mb-5">
                <label>Email : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>User Name : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Mobile : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>First Name : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Last Name : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Gender : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Age : </label>
                <label></label>
              </div>
              <div className="flex justify-start mb-5">
                <label>City : </label>
                <label></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
