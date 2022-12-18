export const Product = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
////////////////////////////////////////////////////////////////////
export const Profile = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
////////////////////////////////////////////////////////////////////
export const IdPrduct = (state = [], { type, payload }) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
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
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const Orders = (state = [], { type, payload }) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const OrderId = (state = [], { type, payload }) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const ChangeProfile = (state = [], { type, payload }) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////
export const UploadAvatar = (state = [], { type, payload }) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
