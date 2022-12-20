import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../../css/main.css";
import { getProfile, getUploadAvatar } from "../../redux/action";

function UploadAvatar({ setQTY }) {
  const [Pic, setPic] = useState(null);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.UploadAvatar);
  const { Profile } = useSelector((state) => state);
  const req = () => {
    if (Pic) {
      dispatch(getUploadAvatar(Pic));
      if (data) {
        localStorage.setItem("User", JSON.stringify(Profile.data.user));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile picture changed successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          dispatch(getProfile());
        }, 3000);
      } else if (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Select your file",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div className="w-full">
      <div className="sm:flex -ml-96 w-80 sm:w-96 sm:-ml-56 md:w-80 md:-ml-12 lg:w-10/12 lg:ml-5 xl:w-7/12 xl:ml-32 2xl:w-4/12 2xl:ml-96">
        <div className="card w-full bg-primary text-primary-content mt-72 sm:mt-32 shadow-lg">
          <div className="card-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div
                className="tooltip"
                data-tip="The corresponding image must be under 2 MB and only have extensions (PNG, JPG)"
              >
                <input
                  type="file"
                  accept=".jpg, .png"
                  className="file-input file-input-bordered file-input-accent
                w-full"
                  onChange={(e) => setPic(e.target.files[0])}
                />
              </div>
              <div className="card-actions justify-evenly mt-5">
                <button className="btn sm:w-5/12 lg:w-4/12" onClick={req}>
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
