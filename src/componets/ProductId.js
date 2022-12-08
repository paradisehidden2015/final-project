import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/main.css";

function ProductId({ login, setorderArray, orderArray }) {
  const { state } = useLocation();
  const [nu, setnu] = useState(true);

  let q = -1;
  const help2 = JSON.parse(JSON.stringify(orderArray));
  const john = orderArray.find((item) => item.idProduct === state);
  if (john) {
    help2.map((item, index) => {
      if (item.idProduct == john.idProduct) {
        q = index;
      }
    });
  }

  function nul() {}
  let array = 0;
  function order() {
    setnu(false);
    if (orderArray.length == 0) {
      setorderArray([
        {
          idProduct: state,
          qty: 1,
          name: datas.name,
          brand: datas.brand,
          category: datas.category,
          color: datas.color,
          price: datas.price,
          rating: datas.rating,
          countInStock: datas.countInStock,
          numReviews: datas.numReviews,
          description: datas.description,
          image: datas.image,
        },
      ]);
    } else {
      const john = orderArray.find((item) => item.idProduct === state);

      setorderArray((last) => {
        const help = JSON.parse(JSON.stringify(last));

        if (john) {
          help.map((item, index) => {
            if (item.idProduct == john.idProduct) {
              array = index;

              help[array].qty = help[array].qty + 1;
              return [...help];
            }
          });
          return [...help];
        } else {
          help.push({
            idProduct: state,
            qty: 1,
            name: datas.name,
            brand: datas.brand,
            category: datas.category,
            color: datas.color,
            price: datas.price,
            rating: datas.rating,
            countInStock: datas.countInStock,
            numReviews: datas.numReviews,
            description: datas.description,
            image: datas.image,
          });
          return [...help];
        }
      });
    }
  }
  function orderPlus() {
    const john = orderArray.find((item) => item.idProduct === state);

    setorderArray((last) => {
      const help = JSON.parse(JSON.stringify(last));

      if (john) {
        help.map((item, index) => {
          if (item.idProduct == john.idProduct) {
            array = index;

            help[array].qty = help[array].qty + 1;
            return [...help];
          }
        });
        return [...help];
      }
    });
  }
  function orderMuines() {
    const john = orderArray.find((item) => item.idProduct === state);

    setorderArray((last) => {
      const help = JSON.parse(JSON.stringify(last));

      if (john) {
        help.map((item, index) => {
          if (item.idProduct == john.idProduct) {
            array = index;

            help[array].qty = help[array].qty - 1;
            if (help[array].qty == 0) {
              help.splice(index, 1);
              return [...help];
            }
            return [...help];
          }
        });
        return [...help];
      }
    });
  }
  //////////////////sat localStorage
  localStorage.setItem("orderArray", JSON.stringify(orderArray));
  //////////////////
  //////////////////get localStorage
  let storage = JSON.parse(localStorage.getItem("orderArray"));
  //////////////////

  const [datas, setdatas] = useState({});
  const colo = datas.color;
  const product = async () => {
    try {
      const { data } = await axios.get(
        `http://kzico.runflare.run/product/${state}`
      );
      setdatas(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    product();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="mt-20 flex justify-center w-full sm:w-4/5">
        <div className="w-full bg-gray-800 m-5 rounded-xl relative shadow-xl">
          <div className="left text-xs md:text-sm xl:text-base 2xl:text-lg m-10 mt-48 sm:mt-5">
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500 overflow-auto">
                  Name :{" "}
                </span>
                {datas.name}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Brand : </span>
                {datas.brand}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Category : </span>
                {datas.category}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500 relative">
                  Color :{" "}
                </span>
                {datas.color}
                {
                  <div
                    className="w-5 inline-block ml-2 h-5 rounded-full relative top-2"
                    style={{ backgroundColor: colo }}
                  ></div>
                }
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Price : </span>
                {datas.price} $
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">Rating : </span>
                {datas.rating}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">
                  CountIn Stock :{" "}
                </span>
                {datas.countInStock == 0
                  ? "There is no inventory"
                  : datas.countInStock}
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <p>
                <span className="font-semibold text-teal-500">
                  Num Reviews :{" "}
                </span>
                {datas.numReviews}
              </p>
            </div>
            <div className="mt-6 flex justify-start overflow-auto">
              <p>
                <span className="font-semibold text-teal-500">
                  Description :{" "}
                </span>
                {datas.description}
              </p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl absolute top-5 right-5 w-10/12 sm:w-4/12 2xl:w-3/12 h-40 lg:h-60 2xl:h-64 bg-white flex justify-center items-center overflow-hidden">
            <img
              className="w-4/12"
              src={datas.image}
              // "https://placeimg.com/400/225/arch"
              alt="image"
            />
          </div>
          <button
            className="relative bottom-5 btn btn-primary hover:bg-transparent hover:border-4 hover:scale-105 hover:text-violet-300 transition-all duration-300 hover:shadow-xl w-60"
            onClick={() => (nu ? order() : nul())}
          >
            {q == -1 ? (
              "add to cart"
            ) : (
              <span className="w-full flex justify-between">
                <span
                  className="btn btn-circle btn-error btn-sm hover:scale-125 text-lg"
                  onClick={() => orderMuines()}
                >
                  -
                </span>
                <span className="text-2xl count">
                  {storage.map((item) => {
                    if (item.idProduct == state) {
                      return item.qty;
                    }
                  })}
                </span>
                <span
                  className="btn btn-circle btn-success btn-sm hover:scale-125 text-lg"
                  onClick={() => orderPlus()}
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
