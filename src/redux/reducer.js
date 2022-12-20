export const Product = (state = [], { type, payload }) => {
  switch (type) {
    case "loadingProduct":
      return payload;
    case "successProduct":
      return payload;
    case "failedProduct":
      return payload;
    default:
      return state;
  }
};
////////////////////////////////////////////////////////////////////
export const Profile = (state = { data: [], error: "" }, { type, payload }) => {
  switch (type) {
    case "loadingProfile":
      return payload;
    case "successProfile":
      return payload;
    case "failedProfile":
      return payload;
    default:
      return state;
  }
};
////////////////////////////////////////////////////////////////////
export const IdPrduct = (state = [], { type, payload }) => {
  switch (type) {
    case "loadingIdPrduct":
      return payload;
    case "successIdPrduct":
      return payload;
    case "failedIdPrduct":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const Cart = (state = [], { type, payload }) => {
  switch (type) {
    case "AddProduct":
      return payload;
    case "PlusNumber":
      return payload;
    case "MinusNumber":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const Checkout = (state = [], { type, payload }) => {
  switch (type) {
    case "loadingCheckout":
      return payload;
    case "successCheckout":
      return payload;
    case "failedCheckout":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const Orders = (state = [], { type, payload }) => {
  switch (type) {
    case "loadingOrders":
      return payload;
    case "successOrders":
      return payload;
    case "failedOrders":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const OrderId = (state = {}, { type, payload }) => {
  switch (type) {
    case "loadingOrderId":
      return payload;
    case "successOrderId":
      return payload;
    case "failedOrderId":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const ChangeProfile = (state = [], { type, payload }) => {
  switch (type) {
    case "loadingChangeProfile":
      return payload;
    case "successChangeProfile":
      return payload;
    case "failedChangeProfile":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const UploadAvatar = (
  state = { data: [], error: "" },
  { type, payload }
) => {
  switch (type) {
    case "loadingUploadAvatar":
      return payload;
    case "successUploadAvatar":
      return payload;
    case "failedUploadAvatar":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const ChangePassword = (state = [], { type, payload }) => {
  switch (type) {
    case "loadingChangePassword":
      return payload;
    case "successChangePassword":
      return payload;
    case "failedChangePassword":
      return payload;
    default:
      return state;
  }
};
