import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import Orders from "./componets/Orders";
import ProductId from "./componets/ProductId";
import Login from "./componets/Login";
import SingUp from "./componets/SingUp";
import Profile from "./componets/Profile";
import Product from "./componets/Product";
import Address from "./componets/Address";
import Checkout from "./componets/Checkout";
import OrderId from "./componets/OrderId";
import Cart from "./componets/Cart";
import Setting from "./componets/Setting1/Setting";
import ChangePassword from "./componets/Setting1/ChangePassword";
import ChangeProfile from "./componets/Setting1/ChangeProfile";
import UploadAvatar from "./componets/Setting1/UploadAvatar";
import "./css/main.css";
import NotFound from "./componets/NotFound";
import { useEffect, useState } from "react";
import { getProfile } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.Profile);
  /////////////////////////////////////////////////////////////////
  const [login, setlogin] = useState(false);
  const storageUser = JSON.parse(localStorage.getItem("User")) ?? false;
  useEffect(() => {
    storageUser && setlogin(true);
  }, [storageUser]);
  const [QTY, setQTY] = useState(0);
  ///////////////////////////////////////////////////////////////   Load
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  /////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <Navbar login={login} setlogin={setlogin} setQTY={setQTY} />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/ProductId" element={<ProductId setQTY={setQTY} />} />
        <Route path="/Orders" element={login ? <Orders /> : <NotFound />} />
        <Route
          path="/Login"
          element={!login ? <Login setlogin={setlogin} /> : <NotFound />}
        />
        <Route path="/SingUp" element={!login ? <SingUp /> : <NotFound />} />
        <Route path="/Profile" element={login ? <Profile /> : <NotFound />} />
        <Route path="/Address" element={login ? <Address /> : <NotFound />} />
        <Route
          path="/Checkout"
          element={login ? <Checkout setQTY={setQTY} /> : <NotFound />}
        />
        <Route path="/Cart" element={<Cart setQTY={setQTY} login={login} />} />
        <Route path="/OrderId" element={login ? <OrderId /> : <NotFound />} />
        <Route path="/Setting" element={login ? <Setting /> : <NotFound />}>
          <Route
            path="ChangeProfile"
            element={login ? <ChangeProfile /> : <NotFound />}
          />
          <Route
            path="ChangePassword"
            element={login ? <ChangePassword /> : <NotFound />}
          />
          <Route
            path="UploadAvatar"
            element={login ? <UploadAvatar setQTY={setQTY} /> : <NotFound />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
