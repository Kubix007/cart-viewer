import axios from "axios";

const API_URL = "https://dummyjson.com/products?limit=0";

const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const productsService = {
  getAllProducts,
};

export default productsService;
