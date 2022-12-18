import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "../css/main.css";
import { getCart, getIdPrduct } from "../redux/action";

function ProductId({ setQTY }) {
  const { state } = useLocation();
  const [status, setstatus] = useState(false);

  const dispatch = useDispatch();
  const { Cart, IdPrduct } = useSelector((state) => state);
  const get = IdPrduct.data ?? false;
  useEffect(() => {
    dispatch(getIdPrduct(state));
    Cart.map((item) => {
      if (item._id === state) {
        setstatus(true);
      }
    });
  }, []);
  /////////////////////////////////////////////////// disabled btn
  const qq = Cart.find((item) => item._id === state);
  if (status) {
    if (qq === undefined) {
      setstatus(false);
      setTimeout(() => {
        setQTY(Math.random());
      }, 200);
    }
  }
  return (
    <div className="flex justify-center">
      <div className="mt-20 flex justify-center w-full sm:w-4/5">
        <div className="w-full bg-gray-800 m-5 rounded-xl relative shadow-xl">
          <div className="left text-xs md:text-sm xl:text-base 2xl:text-lg m-10 mt-48 sm:mt-5">
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500 overflow-auto">
                  Name :
                </span>
                {get.name}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Brand : </span>
                {get.brand}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Category : </span>
                {get.category}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500 relative">
                  Color :
                </span>
                {get.color}
                {
                  <span
                    className="w-5 inline-block ml-2 h-5 rounded-full relative top-2"
                    style={{ backgroundColor: get.color }}
                  ></span>
                }
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Price : </span>
                {get.price} $
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Rating : </span>
                {get.rating}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">
                  CountIn Stock :
                </span>
                {get.countInStock == 0
                  ? "There is no inventory"
                  : get.countInStock}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">
                  Num Reviews :
                </span>
                {get.numReviews}
              </p>
            </div>
            <div className="mt-6 flex justify-start overflow-auto">
              <p>
                <span className="font-semibold text-teal-500">
                  Description :
                </span>
                {get.description}
              </p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl absolute top-5 right-5 w-10/12 sm:w-4/12 2xl:w-3/12 h-40 lg:h-60 2xl:h-64 bg-white flex justify-center items-center overflow-hidden">
            <img className="w-4/12" src={get.image} alt="image" />
          </div>
          <button
            className={`relative bottom-5 btn btn-primary hover:bg-transparent hover:border-4 hover:scale-105 hover:text-violet-300 transition-all duration-300 hover:shadow-xl w-60 ${
              status && "hover:scale-100"
            }`}
            onClick={() => {
              !status && dispatch(getCart("AddProduct", state, get));
              setstatus(true);
            }}
          >
            {!status ? (
              "add to cart"
            ) : (
              <span className="w-full flex justify-between">
                <span
                  className="btn btn-circle btn-error btn-sm hover:scale-125 text-lg"
                  onClick={() => {
                    dispatch(getCart("MinusNumber", state));
                    Cart.map((item) => {
                      if (item._id === state) {
                        setQTY(item.qty);
                      }
                    });
                  }}
                >
                  -
                </span>
                <span className="text-2xl count">
                  {Cart.map((item) => {
                    if (item._id === state) {
                      return item.qty;
                    }
                  })}
                </span>
                <span
                  className="btn btn-circle btn-success btn-sm hover:scale-125 text-lg"
                  onClick={() => {
                    dispatch(getCart("PlusNumber", state));

                    Cart.map((item) => {
                      if (item._id === state) {
                        setQTY(item.qty);
                      }
                    });
                  }}
                >
                  +
                </span>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductId;
