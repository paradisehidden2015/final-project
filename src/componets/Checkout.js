import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/main.css";
import { getCart, getCheckout } from "../redux/action";

function Checkout({ setQTY }) {
  const dispatch = useDispatch();
  const { Cart } = useSelector((state) => state);

  const [Edit, setEdit] = useState(false);
  let Storageaddress = JSON.parse(localStorage.getItem("Address"));
  let StorageOrder = JSON.parse(localStorage.getItem("orderArray"));
  const [Specifications, setSpecifications] = useState(Storageaddress);
  const [orderItems, setorderItems] = useState([]);
  const [FinalOrder, setFinalOrder] = useState(null);
  let qtyPlus = 0;
  ///////////////////////////////////////////// button select option
  const PaymentMethod = document.querySelector("#PaymentMethod");
  ////////////////////////////////////////////  load
  useEffect(() => {
    setorderItems(
      Cart.map((item) => {
        return { product: item._id, qty: item.qty };
      })
    );
  }, []);
  //////////////////////////////////////////   submit
  function Situation() {
    const btnedit = document.querySelector("#edit");
    if (Edit) {
      setEdit(false);
      btnedit.innerHTML = "edit";
      localStorage.setItem("Address", JSON.stringify(Specifications));
    } else {
      setEdit(true);
      btnedit.innerHTML = "confirmation";
    }
  }
  ///////////////////////////////////////////  Done
  function Done() {
    dispatch(getCheckout(orderItems, FinalOrder));
    localStorage.removeItem("orderArray");
    window.location = window.location.href;
    //   setQTY(Math.random());
    // setEdit(true);
  }
  //////////////////////////////////////////
  return (
    <div className="pt-20 pb-24">
      {Cart.map((item, index) => {
        qtyPlus += item.price * item.qty;
        return (
          <div className="item mb-5" key={index}>
            <div className="flex justify-center">
              <div className="w-11/12">
                <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 flex justify-start p-5 transition duration-700 rounded-xl">
                  <div className="sm:flex sm:justify-star w-full">
                    <div className="h-56 sm:w-56 sm:h-44 xl:w-32 xl:h-32 flex justify-center items-center overflow-hidden rounded-lg shadow-xl bg-white">
                      <div className="w-5/12">
                        <img className="" src={item.image} alt="image" />
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
                            Edit ? "" : "btn-disabled"
                          }`}
                          onClick={() => {
                            dispatch(getCart("MinusNumber", item._id));
                            const qq = Cart.find((i) => i._id === item._id);
                            if (qq === undefined) {
                              setQTY(Math.random());
                            }
                          }}
                        >
                          -
                        </button>
                        <p className="inline text-3xl w-20">
                          {Cart.map((i) => {
                            if (i._id === item._id) {
                              return i.qty;
                            }
                          })}
                        </p>
                        <button
                          className={`btn btn-outline btn-circle btn-success text-xl btn-sm hover:shadow-md hover:shadow-green-900 hover:scale-125 ${
                            Edit ? "" : "btn-disabled"
                          }`}
                          onClick={() => {
                            dispatch(getCart("PlusNumber", item._id));
                            const qq = Cart.find((i) => i._id === item._id);
                            if (qq === undefined) {
                              setQTY(Math.random());
                            }
                          }}
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
                  className={`input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto ${
                    Edit ? "" : "btn-disabled text-slate-400"
                  }`}
                  value={Specifications.City}
                  onChange={(e) => {
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
                  className={`input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto ${
                    Edit ? "" : "btn-disabled text-slate-400"
                  }`}
                  value={Specifications.Address}
                  onChange={(e) => {
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
                  className={`input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto ${
                    Edit ? "" : "btn-disabled text-slate-400"
                  }`}
                  value={Specifications.PostalCode}
                  onChange={(e) => {
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
                  className={`input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto ${
                    Edit ? "" : "btn-disabled text-slate-400"
                  }`}
                  value={Specifications.PhoneNumber}
                  onChange={(e) => {
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
                    {qtyPlus.toFixed(3)} $
                  </div>
                </div>
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    ShopingPrice :
                  </label>
                  <div className="block leading-10 text-left lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    {((qtyPlus / 100) * 20).toFixed(3)} $ (20%)
                  </div>
                </div>
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    PaymentMethod :
                  </label>
                  <select
                    id="PaymentMethod"
                    className="select select-bordered block leading-10 text-left w-full lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto"
                  >
                    <option>Pay at home</option>
                    <option>online payment</option>
                    <option>Payment with digital currency</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!FinalOrder &&
        PaymentMethod &&
        setFinalOrder({
          address: Specifications.Address,
          city: Specifications.City,
          postalCode: Specifications.PostalCode,
          phone: Specifications.PhoneNumber,
          paymentMethod: PaymentMethod.value,
          shippingPrice: ((qtyPlus / 100) * 20).toFixed(3),
          totalPrice: qtyPlus,
        })}
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-11/12">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl">
              <div>
                <div className="flex justify-evenly">
                  <button
                    id="edit"
                    className={`btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-3/12 ${
                      !Cart ? "btn-disabled" : ""
                    }`}
                    onClick={() => Situation()}
                  >
                    edit
                  </button>
                  <button
                    id="done"
                    className={`btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-3/12 ${
                      Edit || !Cart?.length ? "btn-disabled" : ""
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
