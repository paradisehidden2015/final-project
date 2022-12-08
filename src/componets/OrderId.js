import React, { useEffect, useState } from "react";
import "../css/main.css";

function OrderId() {
  return (
    <div className="pt-20 pb-24">
      <div className="item">
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5">
            <div className="w-full ml-2 bg-gradient-to-r from-violet-900 to-indigo-900 flex justify-start p-5 transition duration-700 rounded-xl">
              <div className="sm:flex sm:justify-star w-full">
                <div className="pic md:w-44">
                  <img
                    className="rounded-lg shadow-xl"
                    src="https://placeimg.com/400/225/arch"
                    alt="image"
                  />
                </div>
                <div className="mt-5 sm:mt-0 block md:flex md:justify-between w-full ml-10">
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Name :
                    </span>
                    Name
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Price :
                    </span>
                    Price
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Price All :
                    </span>
                    Price All
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Price All :
                    </span>
                    <p className="inline text-3xl mx-7">12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 transition duration-700 rounded-xl">
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">City :</label>
                <label className="rounded-md grid w-full lg:w-9/12 h-10 bg-base-300 justify-start items-center pl-5 overflow-auto">
                  City
                </label>
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Address :</label>
                <label className="rounded-md grid w-full lg:w-9/12 h-10 bg-base-300 justify-start items-center pl-5 overflow-auto">
                  Address
                </label>
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Postal Code :</label>
                <label className="rounded-md grid w-full lg:w-9/12 h-10 bg-base-300 justify-start items-center pl-5 overflow-auto">
                  Postal Code
                </label>
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Phone Number :</label>
                <label className="rounded-md grid w-full lg:w-9/12 h-10 bg-base-300 justify-start items-center pl-5 overflow-auto">
                  Phone Number
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-full lg:w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl">
              <div className="w-full 2xl:flex 2xl:justify-center block">
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    TotalPrice :
                  </label>
                  <div className="block leading-10 mb-5 text-left lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    TotalPrice
                  </div>
                </div>
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    ShopingPrice :
                  </label>
                  <div className="block leading-10 mb-5 text-left lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    ShopingPrice
                  </div>
                </div>
                <div className="block lg:flex text-lg w-full">
                  <label className="block text-left mb-2 lg:w-3/12 2xl:w-5/12 leading-9">
                    PaymentMethod :
                  </label>
                  <div className="block leading-10 mb-5 text-left lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
                    PaymentMethod
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-full lg:w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl">
              <div>
                <div className="flex justify-evenly">
                  <button className="btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-4/12">
                    Orders
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

export default OrderId;
