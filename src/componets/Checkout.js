import React, { useEffect, useState } from "react";
import "../css/main.css";

function Checkout() {
  const [situation, setSituation] = useState(false)
  return (
    <div className="pt-20 pb-24">
      <div className="item">
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 block lg:flex lg:justify-evenly lg:items-center transition duration-700 rounded-xl">
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
                      Name :
                    </span>
                    Name
                  </div>
                </div>
                <div className="text-lg my-5 lg:text-md w-6/6 xl:w-2/6 ">
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Price :
                    </span>
                    Price
                  </div>
                </div>
                <div className="text-lg my-5 lg:text-md w-6/6 xl:w-2/6 ">
                  <div className="flex justify-start items-center">
                    <span className="text-lg lg:text-xl font-semibold text-teal-900">
                      Price All :
                    </span>
                    Price All
                  </div>
                </div>
              </div>
              <div className="title lg:w-40">
                <button className={`btn btn-outline btn-circle btn-error text-xl btn-sm hover:shadow-md hover:shadow-red-900 hover:scale-125${} btn-disabled`}>
                  -
                </button>
                <p className="inline text-3xl mx-7">12</p>
                <button className="btn btn-outline btn-circle btn-success text-xl btn-sm hover:shadow-md hover:shadow-green-900 hover:scale-125 btn-disabled">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 transition duration-700 rounded-xl">
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">City :</label>
                <input
                  type="text"
                  placeholder="City"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  disabled
                  value={""}
                />
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Address :</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  disabled
                  value={""}
                />
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Postal Code :</label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  disabled
                  value={""}
                />
              </div>
              <div className="block lg:flex lg:items-center text-lg mb-5">
                <label className="lg:w-3/12 mb-2 flex">Phone Number :</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-primary grid w-full lg:w-9/12 h-10 bg-base-300 justify-start pl-5 overflow-auto"
                  disabled
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-4/5">
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
                  <select className="select select-bordered block leading-10 mb-5 text-left w-full lg:w-9/12 2xl:grid 2xl:w-6/12 h-10 bg-base-300 rounded-lg place-items-center justify-start pl-5 overflow-auto">
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
          <div className="item w-4/5">
            <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 m-2 p-5 rounded-xl">
              <div>
                <div className="flex justify-evenly">
                  <button className="btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-4/12">
                    edit
                  </button>
                  <button className="btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-4/12">
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
