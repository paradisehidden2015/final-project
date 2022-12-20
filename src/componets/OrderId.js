import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/main.css";
import { getOrderId } from "../redux/action";

function OrderId() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { OrderId } = useSelector((state) => state);
  const get = OrderId.data ?? false;
  useEffect(() => {
    dispatch(getOrderId(state));
  }, []);
  return (
    <div className="pt-20 pb-24">
      {get?.orderItems?.map((item, index) => {
        return (
          <div className="item mb-5" key={index}>
            <div className="flex justify-center">
              <div className="w-11/12">
                <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 block lg:flex lg:justify-start p-5 transition duration-700 rounded-xl">
                  <div className="w-full lg:w-2/12 md:ml-0 flex justify-center items-center">
                    <div className="bg-white w-20 lg:w-44 h-20 lg:h-44 flex justify-center items-center overflow-hidden rounded-lg shadow-xl">
                      <img
                        className="w-4/12 lg:w-6/12"
                        src={item.product.image}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="sm:flex sm:justify-star w-full">
                    <div className="w-full mt-5 sm:mt-0 block md:ml-10">
                      <div className="block lg:flex lg:justify-start w-full">
                        <div className="block w-full justify-start lg:w-8/12 xl:w-9/12">
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center overflow-auto">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              Order Number:
                            </span>
                            {item.product.name}
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              brand:
                            </span>
                            {item.product.brand}
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              category:
                            </span>
                            {item.product.category}
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              color:
                            </span>
                            {item.product.color}
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              countInStock:
                            </span>
                            {item.product.countInStock}
                          </div>
                        </div>
                        <div className="block w-full justify-start lg:w-8/12 xl:w-3/12">
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              numReviews:
                            </span>
                            {item.product.numReviews}
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              rating:
                            </span>
                            {item.product.rating}
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              price:
                            </span>
                            {item.product.price} $
                          </div>
                          <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                              Order Number:
                            </span>
                            <span className="overflow-auto">{item.qty}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm sm:text-lg my-5 lg:text-md flex justify-start w-full items-center">
                        <span className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-900 mr-2">
                          description:
                        </span>
                        <span className="overflow-auto">
                          {item.product.description}
                        </span>
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
            <div className="w-full block lg:flex lg:justify-start bg-gradient-to-r from-violet-900 to-indigo-900 p-5 transition duration-700 rounded-xl">
              <div className="w-full lg:w-8/12 2xl:w-9/12">
                <div className="flex justify-start items-center  text-sm sm:text-lg mb-5 w-full">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    City:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.shippingAddress?.city}
                  </label>
                </div>
                <div className="flex justify-start items-center text-sm sm:text-lg mb-5">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    Address:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.shippingAddress?.address}
                  </label>
                </div>
                <div className="flex justify-start items-center text-sm sm:text-lg mb-5">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    Postal Code:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.shippingAddress?.postalCode}
                  </label>
                </div>
                <div className="flex justify-start items-center text-sm sm:text-lg mb-5">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    Phone Number:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.shippingAddress?.phone}
                  </label>
                </div>
              </div>
              <div className="w-full lg:w-4/12 2xl:w-3/12">
                <div className="flex justify-start items-center text-sm sm:text-lg mb-5">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    TotalPrice:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.totalPrice} $
                  </label>
                </div>
                <div className="flex justify-start items-center text-sm sm:text-lg mb-5">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    shipping Price:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.shippingPrice} $
                  </label>
                </div>
                <div className="flex justify-start items-center text-sm sm:text-lg mb-5">
                  <label className="mb-2 flex text-teal-900 font-semibold text-xl">
                    Payment Method:
                  </label>
                  <label className="ml-2 h-10 flex justify-start items-center overflow-auto">
                    {get && get.paymentMethod}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex justify-center">
          <div className="item w-11/12">
            <div className="w-full bg-gradient-to-r m-2 p-5 rounded-xl">
              <div>
                <div className="flex justify-evenly">
                  <button
                    id="edit"
                    className="btn btn-accent bg-indigo-800 hover:bg-indigo-600 border-2 sm:w-5/12 lg:w-3/12"
                    onClick={() => navigate("/Orders")}
                  >
                    back to Orders
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
