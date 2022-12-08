import React, { useEffect, useState } from "react";
import "../../css/main.css";

function UploadAvatar() {
  return (
    <div className="w-full">
      <div className="sm:flex -ml-96 w-80 sm:w-96 sm:-ml-56 md:w-80 md:-ml-12 lg:w-10/12 lg:ml-5 xl:w-7/12 xl:ml-32 2xl:w-4/12 2xl:ml-96">
        <div className="card w-full bg-primary text-primary-content mt-72 sm:mt-32 shadow-lg">
          <div className="card-body">
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full"
            />
            <div className="card-actions justify-evenly mt-5">
              <button className="btn sm:w-5/12 lg:w-4/12">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
