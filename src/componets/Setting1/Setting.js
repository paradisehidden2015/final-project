import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../css/main.css";

function Setting() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen pt-20 overflow-hidden">
      <div className="w-full h-64 sm:h-20 fixed md:mt-10 md:ml-10 md:h-5/6 md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-2/12 shadow-lg shadow-teal-500 bg-slate-900 border-2 border-teal-500 rounded-lg">
        <div className="mt-3 md:mt-24 text-orange-400 block sm:flex md:block">
          <button
            className="btn btn-outline btn-accent flex w-full sm:w-52 md:block md:w-full mb-10 rounded-none border-x-0"
            onClick={() => navigate("ChangeProfile")}
          >
            Change Profile
          </button>
          <button
            className="btn btn-outline btn-accent flex w-full sm:w-52 sm:mx-2 md:mx-0 md:block md:w-full mb-10 rounded-none border-x-0"
            onClick={() => navigate("ChangePassword")}
          >
            Change Password
          </button>
          <button
            className="btn btn-outline btn-accent flex w-full sm:w-52 md:block md:w-full mb-10 rounded-none border-x-0"
            onClick={() => navigate("UploadAvatar")}
          >
            Upload Avatar
          </button>
        </div>
      </div>
      <div className="ml-96">
        <Outlet />
        {/* <ChangeProfile /> */}
        {/* <ChangePassword /> */}
        {/* <UploadAvatar /> */}
      </div>
    </div>
  );
}

export default Setting;
