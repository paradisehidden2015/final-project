import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import {
  Product,
  Profile,
  Cart,
  IdPrduct,
  Checkout,
  Orders,
  OrderId,
  ChangeProfile,
  UploadAvatar,
  ChangePassword,
} from "./reducer";
const middleWare = [thunk];
const reducers = combineReducers({
  Product,
  Profile,
  Cart,
  IdPrduct,
  Checkout,
  Orders,
  OrderId,
  ChangeProfile,
  UploadAvatar,
  ChangePassword,
});
const orderArry = JSON.parse(localStorage.getItem("orderArray"))
  ? JSON.parse(localStorage.getItem("orderArray"))
  : [];
const initialState = { Cart: [...orderArry] };
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
