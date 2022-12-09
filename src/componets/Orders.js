import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function Orders({ login, orderArray, setorderArray }) {
  const navigate = useNavigate();
  //////////////////get localStorage
  let Cart = JSON.parse(localStorage.getItem("orderArray"));
  //////////////////
  /////////////////count product
  let countProduct = 0;
  if (Cart) {
    orderArray.map((item) => {
      return (countProduct += item.qty);
    });
  }
  ////////////////
  /////////////////total Price
  let totalPrice = 0;
  if (Cart) {
    orderArray.map((item) => {
      return (totalPrice += item.price * item.qty);
    });
  }
  ////////////////
  ///////////////////Plus&Muines product

  function orderPlus(id) {
    let array1 = 0;
    const john = Cart.find((item) => item.idProduct === id);
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
  //////////////////set localStorage
  localStorage.setItem("orderArray", JSON.stringify(orderArray));
  ///////////////////
  //////////////////get localStorage
  let Storageaddress = JSON.parse(localStorage.getItem("Address"));
  /////////////////
  return (
    <div>
      <div className="pt-20 pb-10">
        {orderArray.map((item, index) => {
          return (
            <div className="item mb-5" key={index}>
              <div className="flex justify-center">
                <div className="w-11/12">
                  <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 flex justify-start p-5 transition duration-700 rounded-xl hover:scale-105">
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
                            className="btn btn-outline btn-circle btn-error text-xl btn-sm hover:shadow-md hover:shadow-red-900 hover:scale-125"
                            onClick={() => orderMuines(item.idProduct)}
                          >
                            -
                          </button>
                          <p className="inline text-3xl w-20">{item.qty}</p>
                          <button
                            className="btn btn-outline btn-circle btn-success text-xl btn-sm hover:shadow-md hover:shadow-green-900 hover:scale-125"
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
      </div>
      {orderArray.length == 0 ? (
        <div className="mt-60 text-xl md:text-4xl text-red-800 font-semibold">
          Your shopping cart is empty!
        </div>
      ) : (
        <div className="relative bottom-5 w-full">
          <div className="flex justify-center">
            <div className="w-11/12">
              <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 p-5 rounded-xl text-2xl">
                <div className="sm:flex sm:justify-between lg:px-10">
                  <p className="text-teal-700 mb-5">
                    total Price :{" "}
                    <span className="text-white">{totalPrice} $</span>
                  </p>
                  <button
                    className="btn btn-info hover:scale-105 w-40"
                    onClick={() =>
                      login
                        ? Storageaddress !== null
                          ? navigate("/Checkout")
                          : navigate("/Address")
                        : navigate("/Login")
                    }
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Orders;
