import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/main.css";
import { getOrders } from "../redux/action";

function Orders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Orders } = useSelector((state) => state);
  const [comments, setcomments] = useState({});
  const get = Orders.data ?? false;
  let OrderNumber = 0;
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  useEffect(() => {
    if (get && get !== [] && get?.length) {
      const help = {};
      get.map((item) => {
        help[item._id] = [];
      });
      get.map((item) => {
        help[item._id] = [...help[item._id], item];
      });
      setcomments(help);
    }
  }, [Orders]);

  return (
    <div className="pt-20 pb-24">
      {Object.entries(comments).map(([key, value]) => {
        return (
          <div key={key}>
            {value.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="flex justify-center">
                    <div className="w-11/12">
                      <div
                        className="w-full bg-gradient-to-r from-violet-900 to-indigo-900 my-2 p-5 rounded-xl block lg:flex lg:justify-evenly lg:items-center hover:cursor-pointer hover:brightness-75 hover:scale-105 transition duration-700"
                        onClick={() => {
                          navigate("/OrderId", {
                            state: item._id,
                          });
                        }}
                      >
                        <div className="text-base sm:text-xl lg:text-base xl:text-xl my-5 flex justify-start items-center">
                          <span className="font-semibold text-teal-900 mr-2">
                            Order Number :
                          </span>
                          {(OrderNumber += index + 1)}
                        </div>
                        <div className="text-base sm:text-xl lg:text-base xl:text-xl my-5 flex justify-start items-center">
                          <span className="font-semibold text-teal-900 mr-2">
                            Number Of Products :
                          </span>
                          {item.orderItems.length}
                        </div>
                        <div className="text-base sm:text-xl lg:text-base xl:text-xl my-5 flex justify-start items-center">
                          <span className="font-semibold text-teal-900 mr-2">
                            total Price :
                          </span>
                          {item.totalPrice} $
                        </div>
                        <div className="text-base sm:text-xl lg:text-base xl:text-xl my-5 flex justify-start items-center">
                          <span className="font-semibold text-teal-900 mr-2">
                            Shipping Price :
                          </span>
                          {item.shippingPrice} $
                        </div>
                        <div className="text-base sm:text-xl lg:text-base xl:text-xl my-5 flex justify-start items-center">
                          <span className="font-semibold text-teal-900 mr-2">
                            Payment Method :
                          </span>
                          {item.paymentMethod}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
