import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/main.css";

function Address() {
  const navigate = useNavigate();
  let Storageaddress = JSON.parse(localStorage.getItem("Address"));
  const [address, setaddress] = useState(Storageaddress ? Storageaddress : []);

  function information() {
    const inputCity = document.querySelector("#City");
    const inputAddress = document.querySelector("#Address");
    const inputPostalCode = document.querySelector("#PostalCode");
    const inputPhoneNumbery = document.querySelector("#PhoneNumber");
    if (
      (inputCity.value,
      inputAddress.value,
      inputPostalCode.value,
      inputPhoneNumbery.value)
    ) {
      if (inputAddress.value.length > 9) {
        localStorage.setItem("Address", JSON.stringify(address));
        if (localStorage.length) {
          navigate("/Checkout");
        }
      } else {
        inputAddress.focus();
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "The address must be at least 10 characters long",
          showConfirmButton: false,
          timer: 2000,
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
  }
  return (
    <div className="mt-32 flex justify-center">
      <div className=" flex justify-center w-full lg:w-9/12 xl:w-7/12 shadow-lg">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            {/* /////////////////City//////////////// */}
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">City :</label>
              <input
                id="City"
                className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto"
                onChange={(e) =>
                  setaddress((last) => {
                    const help = JSON.parse(JSON.stringify(last));
                    help.City = e.target.value;
                    return { ...help };
                  })
                }
              />
            </div>
            {/* ////////////////Address//////////////// */}
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Address :</label>
              <input
                id="Address"
                className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto"
                onChange={(e) =>
                  setaddress((last) => {
                    const help = JSON.parse(JSON.stringify(last));
                    help.Address = e.target.value;
                    return { ...help };
                  })
                }
              />
            </div>
            {/* /////////////Postal Code//////////////// */}
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Postal Code :</label>
              <input
                id="PostalCode"
                className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto"
                onChange={(e) =>
                  setaddress((last) => {
                    const help = JSON.parse(JSON.stringify(last));
                    help.PostalCode = e.target.value;
                    return { ...help };
                  })
                }
              />
            </div>
            {/* /////////////Phone Number//////////////// */}
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Phone Number :</label>
              <input
                id="PhoneNumber"
                className="grid lg:w-11/12 h-10 card bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto"
                onChange={(e) =>
                  setaddress((last) => {
                    const help = JSON.parse(JSON.stringify(last));
                    help.PhoneNumber = e.target.value;
                    return { ...help };
                  })
                }
              />
            </div>
            {/* ///////////////////button//////////////// */}
            <div className="card-actions justify-center mt-5">
              <button className="btn w-2/12" onClick={() => information()}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
