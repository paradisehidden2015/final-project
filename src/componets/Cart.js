import React, { useEffect, useState } from "react";
import "../css/main.css";

function Cart() {
  return (
    <div className="pt-20 pb-24">
      <div className="item">
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl block lg:flex lg:justify-evenly lg:items-center hover:brightness-75 hover:scale-105 transition duration-700">
              <div className="pic mb-5 sm:flex sm:justify-center lg:w-44 lg:mb-0">
                <img
                  className="rounded-lg shadow-xl"
                  src="https://placeimg.com/400/225/arch"
                  alt="image"
                />
              </div>
              <div className="lg:w-96 lg:mt-5 xl:mt-0 xl:w-4/6 xl:flex xl:items-center">
                <div className="w-6/6 xl:w-4/6 text-lg lg:text-md block overflow-auto ">
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Name:
                    </span>
                    Name
                  </div>
                </div>
                <div className="text-lg my-5 lg:text-md w-6/6 xl:w-2/6 ">
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Price:
                    </span>
                    Price
                  </div>
                </div>
              </div>
              <div className="title lg:w-40">
                <button className="btn btn-outline btn-circle btn-error text-xl btn-sm hover:shadow-md hover:shadow-red-900 hover:scale-125">
                  -
                </button>
                <p className="inline text-3xl mx-7">12</p>
                <button className="btn btn-outline btn-circle btn-success text-xl btn-sm hover:shadow-md hover:shadow-green-900 hover:scale-125">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full fixed bottom-0">
        <div className="bg-gray-800 p-5 flex justify-between items-center">
          <div className="">
            <span className="text-lg font-semibold text-teal-900">
              Total Price:
            </span>
            Total Price
          </div>
          <div className="">
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
