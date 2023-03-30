import { CategoriesRes } from "../interfaces/categories.interface";
import { ProductRes } from "../interfaces/productRes.interface";
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

export { getAllProducts, getAllCategories };
