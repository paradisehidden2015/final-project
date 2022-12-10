import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../../css/main.css";

function UploadAvatar({ setUser, User }) {
  const [Pic, setPic] = useState(null);

  const req = async () => {
    if (Pic) {
      const formData = new FormData();
      formData.append("profile-image", Pic);
      try {
        const { data } = await axios.post(
          "http://kzico.runflare.run/user/profile-image",
          formData,
          {
            headers: {
              authorization: `Bearer ${User[0].token}`,
            },
          }
        );
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile picture changed successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      } catch (error) {
        console.log(error.response.data);
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
