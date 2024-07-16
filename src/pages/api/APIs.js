import { callApi } from "./API_config";

export const Signin = async (data) => {
  return callApi("/user/login/", data, "post");
};
export const Logout = async (data) => {
  return callApi("/user/logout/", data, "post");
};
export const Signup = async (data) => {
  return callApi("/user/register/", data, "post");
};
export const GetProducts = async () => {
  return callApi("/products/all_products/", null, "get");
};
export const GetBanner = async (id) => {
  return callApi(`/pages/banner/${id}`, null, "get");
};
export const OTP = async (data) => {
  return callApi(`/user/verify-otp/`, data, "post");
};
export const GetProductById = async (id) => {
  return callApi(`/products/product/${id}`, null, "get");
};
export const PostCart = async (data) => {
  return callApi("/cart/cart", data, "post");
};
export const PostCartItem = async (id) => {
  return callApi(`/cart/cart/add/${id}/`, null, "post");
};
export const PostReview = async (data) => {
  return callApi(`/products/submit-review/`, data, "post");
};
export const CartItems = async () => {
  return callApi(`/cart/cart/`, null, "post");
};
