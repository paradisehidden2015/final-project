import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import Product from "./componets/Product";
import ProductId from "./componets/ProductId";
import Login from "./componets/Login";
import SingUp from "./componets/SingUp";
import Profile from "./componets/Profile";
import Cart from "./componets/Cart";
import Address from "./componets/Address";
import Checkout from "./componets/Checkout";
import OrderId from "./componets/OrderId";
import Orders from "./componets/Orders";
import Setting from "./componets/Setting1/Setting";
import ChangePassword from "./componets/Setting1/ChangePassword";
import ChangeProfile from "./componets/Setting1/ChangeProfile";
import UploadAvatar from "./componets/Setting1/UploadAvatar";
import "./css/main.css";
import { useState } from "react";
import NotFound from "./componets/NotFound";

function App() {
  const [login, setlogin] = useState(false);
  let Storage = JSON.parse(localStorage.getItem("orderArray"));
  const [orderArray, setorderArray] = useState(Storage ? Storage : []);
  return (
    <div className="App">
      <Navbar login={login} orderArray={orderArray} />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route
          path="/ProductId"
          element={
            <ProductId
              login={login}
              setorderArray={setorderArray}
              orderArray={orderArray}
            />
          }
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Address" element={<Address />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route
          path="/Orders"
          element={
            <Orders
              login={login}
              orderArray={orderArray}
              setorderArray={setorderArray}
            />
          }
        />
        <Route path="/OrderId" element={<OrderId />} />
        <Route path="/Setting" element={<Setting />}>
          <Route path="ChangeProfile" element={<ChangeProfile />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="UploadAvatar" element={<UploadAvatar />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
