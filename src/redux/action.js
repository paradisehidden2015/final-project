import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
//////////////////get localStorage
const storageUser = JSON.parse(localStorage.getItem("User"));
const token = storageUser ? storageUser[0]?.token : storageUser;

//////////////////////////////////////////////////////////////////////////////
export const getProduct = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/product/");

    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
//////////////////////////////////////////////////////////////////////////////
export const getProfile = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
///////////////////////////////////////////////////////////////////////////////
export const getIdPrduct = (product) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${product}`
    );
    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
////////////////////////////////////////////////////////////////////////////////
export const getCart = (type, product, data) => (dispatch, getState) => {
  const cart = getState().Cart;

  if (type === "AddProduct") {
    const help = JSON.parse(JSON.stringify(data));
    help.qty = 1;
    let finaldata = [...cart, help];
    if (cart.length === 0) {
      localStorage.setItem("orderArray", JSON.stringify(finaldata));
      dispatch({
        type: type,
        payload: finaldata,
      });
    } else {
      cart.push(finaldata);
      localStorage.setItem("orderArray", JSON.stringify(finaldata));
      dispatch({
        type: type,
        payload: finaldata,
      });
    }
  } else if (type === "PlusNumber") {
    cart.map((item, index) => {
      if (item._id === product) {
        cart[index].qty = cart[index].qty + 1;
        localStorage.setItem("orderArray", JSON.stringify(cart));
        dispatch({
          type: type,
          payload: cart,
        });
      }
    });
  } else if (type === "MinusNumber") {
    cart.map((item, index) => {
      if (item._id == product) {
        cart[index].qty = cart[index].qty - 1;
        localStorage.setItem("orderArray", JSON.stringify(cart));
        dispatch({
          type: type,
          payload: cart,
        });
        if (cart[index].qty === 0) {
          cart.splice(index, 1);
          localStorage.setItem("orderArray", JSON.stringify(cart));
          dispatch({
            type: type,
            payload: cart,
          });
        }
      }
    });
  }
};
//////////////////////////////////////////////////////////////////////////////
export const getCheckout = (orderItems, FinalOrder) => async (dispatch) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.post(
      "http://kzico.runflare.run/order/submit",
      {
        orderItems: orderItems,
        shippingAddress: {
          address: FinalOrder.address,
          city: FinalOrder.city,
          postalCode: FinalOrder.postalCode,
          phone: FinalOrder.phone,
        },
        paymentMethod: FinalOrder.paymentMethod,
        shippingPrice: FinalOrder.shippingPrice,
        totalPrice: FinalOrder.totalPrice,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your purchase has been successfully registered",
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 3000,
    });
  }
};
//////////////////////////////////////////////////////////////////////////////
export const getOrders = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/order/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
//////////////////////////////////////////////////////////////////////////////
export const getOrderId = (id) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get(`http://kzico.runflare.run/order/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
    // console.log(getState().OrderId.data)
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
//////////////////////////////////////////////////////////////////////////////
export const getChangeProfile = (Profileing) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.put(
      "http://kzico.runflare.run/user/change-profile",
      {
        firstname: Profileing.FirstName,
        lastname: Profileing.LastName,
        gender: Profileing.Gender,
        age: Profileing.Age,
        city: Profileing.City,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
//////////////////////////////////////////////////////////////////////////////
export const getUploadAvatar = (Pic) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], error: "", loading: true },
  });
  try {
    const formData = new FormData();
    formData.append("profile-image", Pic);
    const { data } = await axios.post(
      "http://kzico.runflare.run/user/profile-image",
      formData,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: "success",
      payload: { data: data, error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
