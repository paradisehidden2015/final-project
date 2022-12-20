import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

function Navbar({ login, setlogin, setQTY }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.Profile);

  //////////////////////////////////////////////////////////////   get localStorage
  const storageUser = JSON.parse(localStorage.getItem("User"));
  const storageorder = JSON.parse(localStorage.getItem("orderArray"));
  ///////////////////////////////////////////////////////////////   logout
  function logout() {
    navigate("/");
    setlogin(false);
    localStorage.removeItem("User");
  }
  //////////////////////////////////////////////////////////////  qty product
  let countProduct = 0;
  if (storageorder) {
    storageorder.map((item) => {
      return (countProduct += item.qty);
    });
  }
  ///////////////////////////////////////////////////////////////
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
            onClick={() => navigate("/Cart")}
          >
            <label className="btn btn-ghost btn-circle">
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
                {storageorder?.length > 0 ? (
                  <span className="badge badge-sm indicator-item">
                    {countProduct}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </label>
          </div>

          <div className="flex-none mr-12 sm:mr-20 sm:ml-10">
            <ul className="menu menu-horizontal w-20">
              <li
                className="rounded-lg"
                tabIndex={0}
                onClick={() => !login && navigate("/Login")}
              >
                <a className="rounded-lg text-xl font-semibold">
                  {login
                    ? data?.user?.username
                      ? data?.user?.username
                      : storageUser?.username
                    : "Login / Singup"}
                  {login && (
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  )}
                </a>
                {login ? (
                  <ul className="p-2 bg-base-200 text-base w-40 flex-none">
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
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>

          {login ? (
            <label className="btn btn-ghost btn-circle avatar mr-5">
              <div
                className="w-20 rounded-full"
                onClick={() => navigate("/profile")}
              >
                <img
                  src={
                    data?.user?.image ? data?.user?.image : storageUser.image
                  }
                />
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
