import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/main.css";

function Navbar({ login, orderArray }) {
  const navigate = useNavigate();
  //////////////////get localStorage
  let storage = JSON.parse(localStorage.getItem("orderArray"));
  let storageUser = JSON.parse(localStorage.getItem("User"));
  //////////////////

  function logout() {
    window.location = window.location.href;
    JSON.parse(localStorage.removeItem("User"));
  }

  /////////////////qty product
  let countProduct = 0;
  if (storage) {
    orderArray.map((item) => {
      return (countProduct += item.qty);
    });
  }
  ////////////////
  return (
    <div>
      <div className="navbar bg-primary flex justify-between fixed top-0 z-50 shadow-md shadow-violet-700">
        <div>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => navigate("/")}
          >
            Home
          </a>
        </div>
        <div className="">
          <div
            className="dropdown dropdown-end"
            onClick={() => navigate("/Orders")}
          >
            <label
              // tabIndex={orderArray.length ? 0 : ""}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {orderArray.length ? (
                  <span className="badge badge-sm indicator-item">
                    {countProduct}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={login ? 0 : ""}
              onClick={() => !login && navigate("/Login")}
              className="btn btn-ghost mx-10"
            >
              <div className="text-lg">
                {login ? storageUser[0].username : "Login / Singup"}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-xl"
            >
              <li>
                <a onClick={() => navigate("/profile")}>Profile</a>
              </li>
              <li>
                <a onClick={() => navigate("/Orders")}>Orders</a>
              </li>
              <li>
                <a onClick={() => navigate("/setting/ChangeProfile")}>
                  Setting
                </a>
              </li>
              <li>
                <a onClick={() => logout()}>Logout</a>
              </li>
            </ul>
          </div>
          {login ? (
            <label className="btn btn-ghost btn-circle avatar mr-5">
              <div
                className="w-10 rounded-full"
                onClick={() => navigate("/profile")}
              >
                <img src={storageUser[0].image} />
              </div>
            </label>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
