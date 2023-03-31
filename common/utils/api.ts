import { CategoriesRes } from "../interfaces/categories.interface";
import { ProductRes } from "../interfaces/productRes.interface";
import { CartSlice } from "../interfaces/redux.interfaces";
import { API_URL, STRAPI_API_TOKEN } from "./urls";
import axios from "axios";

axios.defaults.headers.common = { Authorization: `bearer ${STRAPI_API_TOKEN}` };

const getAllProducts = async (endpoint: string): Promise<ProductRes> => {
  const response = await axios.get(`${API_URL}${endpoint}`);
  return response.data;
};

const getAllCategories = async (endpoint: string): Promise<CategoriesRes> => {
  const response = await axios.get(`${API_URL}${endpoint}`);
  return response.data;
};

const makePaymentRequest = async (
  endpoint: string,
  payload: { products: CartSlice[] }
) => {
  const response = await axios.post(`${API_URL}${endpoint}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export { getAllProducts, getAllCategories, makePaymentRequest };
