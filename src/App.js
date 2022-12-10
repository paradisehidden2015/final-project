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
  let Storage = JSON.parse(localStorage.getItem("orderArray"));
  const [orderArray, setorderArray] = useState(Storage ? Storage : []);
  let Storageaddress = JSON.parse(localStorage.getItem("Address"));
  const [address, setaddress] = useState(Storageaddress ? Storageaddress : []);
  let storageUser = JSON.parse(localStorage.getItem("User"));
  const [User, setUser] = useState(storageUser ? storageUser : []);
  const [login, setlogin] = useState(User.length ? true : false);
  return (
    <div className="App">
      <Navbar
        login={login}
        orderArray={orderArray}
        setUser={setUser}
        User={User}
      />
      <Routes>
        <Route path="/" element={<Product User={User} />} />
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
        <Route path="/Cart" element={login ? <Cart /> : <NotFound />} />
        <Route
          path="/Login"
          element={
            !login ? (
              <Login setlogin={setlogin} setUser={setUser} User={User} />
            ) : (
              <NotFound />
            )
          }
        />
        <Route path="/SingUp" element={!login ? <SingUp /> : <NotFound />} />
        <Route
          path="/Profile"
          element={login ? <Profile User={User} /> : <NotFound />}
        />
        <Route
          path="/Address"
          element={
            login ? (
              <Address setaddress={setaddress} address={address} />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/Checkout"
          element={
            login ? (
              <Checkout
                setorderArray={setorderArray}
                orderArray={orderArray}
                setaddress={setaddress}
                address={address}
                User={User}
              />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/Orders"
          element={
            login ? (
              <Orders
                login={login}
                orderArray={orderArray}
                setorderArray={setorderArray}
              />
            ) : (
              <NotFound />
            )
          }
        />
        <Route path="/OrderId" element={login ? <OrderId /> : <NotFound />} />
        <Route path="/Setting" element={login ? <Setting /> : <NotFound />}>
          <Route
            path="ChangeProfile"
            element={login ? <ChangeProfile User={User} /> : <NotFound />}
          />
          <Route
            path="ChangePassword"
            element={login ? <ChangePassword User={User} /> : <NotFound />}
          />
          <Route
            path="UploadAvatar"
            element={
              login ? (
                <UploadAvatar User={User} setUser={setUser} />
              ) : (
                <NotFound />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
