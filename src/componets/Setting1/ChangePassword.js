import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../../css/main.css";

function ChangePassword({ User }) {
  const [OldPassword, setOldPassword] = useState({
    value: "",
    error: "Old Password is invalid",
    isTouched: false,
  });
  const [NewPassword, setNewPassword] = useState({
    value: "",
    error: "New Password is invalid",
    isTouched: false,
  });
  const [ConfirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "Confirm New Password is invalid",
    isTouched: false,
  });
  const inputOldPass = document.querySelector("#OldPassword");
  const inputNewPass = document.querySelector("#NewPassword");
  const inputConfirmpass = document.querySelector("#ConfirmPassword");
  const req = async () => {
    if ((inputOldPass.value, inputNewPass.value, inputConfirmpass.value)) {
      if (inputNewPass.value === inputConfirmpass.value) {
        try {
          const { data } = await axios.put(
            "http://kzico.runflare.run/user/change-password",
            {
              old_password: inputOldPass.value,
              new_password: inputNewPass.value,
            },
            {
              headers: {
                authorization: `Bearer ${User[0].token}`,
              },
            }
          );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Password changed successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        } catch (error) {
          // console.log(error.response.data);
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
          title: "Password confirmation is wrong",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please complete all fields",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div className="w-full">
      <div className="sm:flex -ml-96 w-80 sm:w-80 sm:-ml-56 md:w-80 md:-ml-12 lg:w-10/12 lg:ml-5 xl:w-7/12 xl:ml-32 2xl:w-4/12 2xl:ml-96">
        <div className="card w-full bg-primary text-primary-content mt-72 sm:mt-32 shadow-lg">
          <div className="card-body">
            {/* /////////////Old Password//////////////// */}
            <input
              type="password"
              id="OldPassword"
              placeholder="Old Password"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) =>
                setOldPassword((last) => {
                  const help = { ...last };
                  help.value = e.target.value;
                  return { ...help };
                })
              }
              onBlur={() => {
                setOldPassword((last) => {
                  const help = { ...last };
                  help.isTouched = true;
                  return { ...help };
                });
              }}
            />
            {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              OldPassword.value
            ) &&
              OldPassword.isTouched && (
                <span className="absolute top-20">{OldPassword.error}</span>
              )}
            {/* /////////////New Password//////////////// */}
            <input
              type="password"
              id="NewPassword"
              placeholder="New Password"
              className="input input-bordered input-primary w-full text-center mb-5"
              onChange={(e) =>
                setNewPassword((last) => {
                  const help = { ...last };
                  help.value = e.target.value;
                  return { ...help };
                })
              }
              onBlur={() => {
                setNewPassword((last) => {
                  const help = { ...last };
                  help.isTouched = true;
                  return { ...help };
                });
              }}
            />
            {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              NewPassword.value
            ) &&
              NewPassword.isTouched && (
                <span className="absolute top-[157px]">
                  {NewPassword.error}
                </span>
              )}
            {/* /////////////confirm Password//////////////// */}
            <input
              type="password"
              id="ConfirmPassword"
              placeholder="Confirm New Password"
              className="input input-bordered input-primary w-full text-center mb-5"
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
            {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              ConfirmPassword.value
            ) &&
              ConfirmPassword.isTouched && (
                <span className="absolute top-[227px]">
                  {ConfirmPassword.error}
                </span>
              )}
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

export default ChangePassword;
