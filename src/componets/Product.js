import axios from "axios";
import { postcss } from "daisyui/src/lib/postcss-prefixer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function Product({ User }) {
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [comments, setcomments] = useState({});
  const product = async () => {
    try {
      const { data } = await axios.get("http://kzico.runflare.run/product/");
      setdata(data);
      const help = {};
      data.map((item) => {
        help[item._id] = [];
      });
      data.map((item) => {
        help[item._id] = [...help[item._id], item];
      });
      setcomments(help);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    product();
  }, []);

  //////////////////sat localStorage
  localStorage.setItem("User", JSON.stringify(User));
  //////////////////

  return (
    <div className="mt-20 flex-wrap flex justify-around">
      {Object.entries(comments).map(([key, value]) => {
        return (
          <div
            key={key}
            className="card w-96 bg-gray-800 shadow-xl m-5 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {value.map((item) => {
              return (
                <div
                  key={item._id}
                  onClick={() =>
                    navigate("/ProductId", {
                      state: item._id,
                    })
                  }
                >
                  <figure className="bg-white h-60">
                    <img src={item.image} className="w-32" alt="image" />
                    {/* <img src="https://placeimg.com/400/225/arch" alt="image" /> */}
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-semibold mb-20">
                      {item.name}
                    </h2>
                    {item.countInStock == 0 ? (
                      <p className="text-red-600 text-xl">
                        There is no inventory
                      </p>
                    ) : (
                      <p className="absolute bottom-14 right-0 w-full">
                        countInStock :{" "}
                        <span className="text-red-600 text-xl">
                          {item.countInStock}
                        </span>
                      </p>
                    )}
                    <div className="flex justify-around absolute w-full bottom-5 right-0">
                      <span className="">
                        Price :{" "}
                        <span className="text-green-700 text-lg">
                          {item.price} $
                        </span>
                      </span>
                      <span className="">
                        Rating :{" "}
                        <span className="text-amber-500 text-lg">
                          {item.rating}
                        </span>
                      </span>
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

export default Product;
