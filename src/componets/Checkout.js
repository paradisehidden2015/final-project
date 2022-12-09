import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../css/main.css";

function Checkout({ orderArray, setorderArray, setaddress, address }) {
  const [situation, setSituation] = useState(false);
  const [textCity, setTextCity] = useState("");
  const [textAddress, setTextAddress] = useState("");
  const [textPostalCode, setTextPostalCode] = useState("");
  const [textPhoneNumber, setTextPhoneNumber] = useState("");
  let Storageaddress = JSON.parse(localStorage.getItem("Address"));
  const [Specifications, setSpecifications] = useState(Storageaddress);
  let qtyPlus = 0;

  function Situation() {
    const btnedit = document.querySelector("#edit");
    if (situation) {
      setSituation(false);
      btnedit.innerHTML = "edit";
      //////////////////////
      setaddress([Specifications]);
      localStorage.setItem("Address", JSON.stringify(Specifications));
    } else {
      setSituation(true);
      btnedit.innerHTML = "confirmation";
    }
  }
  ///////////////////Plus&Muines product

  function orderPlus(id) {
    let array1 = 0;
    const john = orderArray.find((item) => item.idProduct === id);
    setorderArray((last) => {
      const help = JSON.parse(JSON.stringify(last));

      // if (john) {
      help.map((item, index) => {
        if (item.idProduct == john.idProduct) {
          array1 = index;

          help[array1].qty = help[array1].qty + 1;
          return [...help];
        }
      });
      return [...help];
      // }
    });
  }
  function orderMuines(id) {
    let array2 = 0;
    setorderArray((last) => {
      const help = JSON.parse(JSON.stringify(last));

      // if (john) {
      help.map((item, index) => {
        if (item.idProduct == id) {
          array2 = index;

          help[array2].qty = help[array2].qty - 1;

          if (help[array2].qty == 0) {
            help.splice(array2, 1);

            return [...help];
          }
          return [...help];
        }
      });
      return [...help];
      // }
    });
  }
  /////////////////////////////////////
  useEffect(() => {
    setTextCity(Storageaddress.City);
    setTextAddress(Storageaddress.Address);
    setTextPostalCode(Storageaddress.PostalCode);
    setTextPhoneNumber(Storageaddress.PhoneNumber);
  }, []);
  ///////////////////////////////////////////
  function Done() {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your purchase has been successfully registered",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  return (
    <div className="pt-20 pb-24">
      {orderArray.map((item, index) => {
        qtyPlus += item.price * item.qty;
        return (
          <div className="item mb-5" key={index}>
            <div className="flex justify-center">
              <div className="w-11/12">
                <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 flex justify-start p-5 transition duration-700 rounded-xl">
                  <div className="sm:flex sm:justify-star w-full">
                    <div className="h-56 sm:w-56 sm:h-44 xl:w-32 xl:h-32 flex justify-center items-center overflow-hidden rounded-lg shadow-xl bg-white">
                      <div className="w-5/12">
                        <img
                          className=""
                          src={item.image}
                          // src="https://placeimg.com/400/225/arch"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-5 sm:mt-0 block xl:flex md:justify-between sm:ml-10">
                      <div className="mb-5 lg:text-xl flex justify-start items-center overflow-auto w-full">
                        <span className="text-lg lg:text-xl xl:text-xl font-semibold text-teal-900 mr-1">
                          Name :
                        </span>
                        {item.name}
                      </div>
                      <div className="w-10/12 xl:flex">
                        <div className="mb-5 lg:text-xl flex justify-start items-center overflow-auto w-full">
                          <span className="text-lg lg:text-xl xl:text-xl font-semibold text-teal-900 mr-1">
                            Price :
                          </span>
                          {item.price} $
                        </div>
                        <div className="mb-5 lg:text-xl flex justify-start items-center overflow-auto w-full">
                          <span className="text-lg lg:text-xl xl:text-xl font-semibold text-teal-900 mr-1">
                            Price All :
                          </span>
                          {item.price * item.qty} $
                        </div>
                      </div>
                      <div className="mt-10 xl:mt-0 ml-16 sm:ml-5 md:ml-16 lg:ml-44 xl:ml-0 flex justify-start items-center">
                        <button
                          className={`btn btn-outline btn-circle btn-error text-xl btn-sm hover:shadow-md hover:shadow-red-900 hover:scale-125 ${
                            situation ? "" : "btn-disabled"
                          }`}
                          onClick={() => orderMuines(item.idProduct)}
                        >
                          -
                        </button>
                        <p className="inline text-3xl w-20">{item.qty}</p>
                        <button
                          className={`btn btn-outline btn-circle btn-success text-xl btn-sm hover:shadow-md hover:shadow-green-900 hover:scale-125 ${
                            situation ? "" : "btn-disabled"
                          }`}
                          onClick={() => orderPlus(item.idProduct)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="item">
        <div className="flex justify-center">
          <div className="w-11/12">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 transition duration-700 rounded-xl">
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">City :</label>
                <input
                  type="text"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  value={textCity}
                  onChange={(e) => {
                    situation && setTextCity(e.target.value);
                    setSpecifications((last) => {
                      const help = JSON.parse(JSON.stringify(last));
                      help.City = e.target.value;
                      return { ...help };
                    });
                  }}
                />
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Address :</label>
                <input
                  type="text"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  value={textAddress}
                  onChange={(e) => {
                    situation && setTextAddress(e.target.value);
                    setSpecifications((last) => {
                      const help = JSON.parse(JSON.stringify(last));
                      help.Address = e.target.value;
                      return { ...help };
                    });
                  }}
                />
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Postal Code :</label>
                <input
                  type="text"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  value={textPostalCode}
                  onChange={(e) => {
                    situation && setTextPostalCode(e.target.value);
                    setSpecifications((last) => {
                      const help = JSON.parse(JSON.stringify(last));
                      help.PostalCode = e.target.value;
                      return { ...help };
                    });
                  }}
                />
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Phone Number :</label>
                <input
                  type="text"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  value={textPhoneNumber}
                  onChange={(e) => {
                    situation && setTextPhoneNumber(e.target.value);
                    setSpecifications((last) => {
                      const help = JSON.parse(JSON.stringify(last));
                      help.PhoneNumber = e.target.value;
                      return { ...help };
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-11/12">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl">
              <div className="w-full 2xl:flex 2xl:justify-center block">
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    TotalPrice :
                  </label>
                  <div className="block leading-10 text-left lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    {qtyPlus} $
                  </div>
                </div>
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    ShopingPrice :
                  </label>
                  <div className="block leading-10 text-left lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    {(qtyPlus / 100) * 20 + qtyPlus} $ (20%)
                  </div>
                </div>
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    PaymentMethod :
                  </label>
                  <select className="select select-bordered block leading-10 text-left w-full lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    <option>Pay at home</option>
                    <option>online payment</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-11/12">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl">
              <div>
                <div className="flex justify-evenly">
                  <button
                    id="edit"
                    className="btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-3/12"
                    onClick={() => Situation()}
                  >
                    edit
                  </button>
                  <button
                    id="done"
                    className={`btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-3/12 ${
                      situation ? "btn-disabled" : ""
                    }`}
                    onClick={() => Done()}
                  >
                    done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
