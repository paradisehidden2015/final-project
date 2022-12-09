import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function Address({ setaddress, address }) {
  const navigate = useNavigate();
  const [Information, setInformation] = useState([]);

  function information() {
    localStorage.setItem("Address", JSON.stringify(address));
    if (localStorage.length) {
      navigate("/Checkout");
    }
  }
  //////////////////get localStorage
  let StorageorderArry = JSON.parse(localStorage.getItem("orderArry"));
  let Storageaddress = JSON.parse(localStorage.getItem("Address"));
  /////////////////
  // return StorageorderArry.map((item, index) => {
  return (
    <div className="mt-32 flex justify-center">
      <div className=" flex justify-center w-full lg:w-9/12 xl:w-7/12 shadow-lg">
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">City :</label>
              <input
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
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Address :</label>
              <input
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
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Postal Code :</label>
              <input
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
            <div className="block lg:flex lg:items-center text-sm">
              <label className="lg:w-2/12 mb-2 flex">Phone Number :</label>
              <input
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
  // });
}

export default Address;
