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
import { useState } from "react";

function App() {

  let Storage = JSON.parse(localStorage.getItem("orderArray"));
  const [orderArray, setorderArray] = useState(Storage ? Storage : []);
  const [QTY, setQTY] = useState(0);

  const storageUser = JSON.parse(localStorage.getItem("User"));

  const [User, setUser] = useState(storageUser?.length ? storageUser : []);
  // storageUser?.length && setUser(storageUser);
  const [login, setlogin] = useState(User?.length ? true : false);
  // User?.length && setlogin(true);
  return (
    <div className="App">
      <Navbar
        login={login}
        orderArray={orderArray}
        setUser={setUser}
        setlogin={setlogin}
        User={User}
      />
      <Routes>
        <Route path="/" element={<Product User={User} />} />
        <Route path="/ProductId" element={<ProductId setQTY={setQTY} />} />
        <Route path="/Orders" element={login ? <Orders /> : <NotFound />} />
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
        <Route path="/Address" element={login ? <Address /> : <NotFound />} />
        <Route
          path="/Checkout"
          element={
            login ? (
              <Checkout
                setorderArray={setorderArray}
                orderArray={orderArray}
                User={User}
                setQTY={setQTY}
              />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/Cart"
          element={
            <Cart
              setQTY={setQTY}
              login={login}
              orderArray={orderArray}
              setorderArray={setorderArray}
            />
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
