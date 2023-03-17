import axios from "axios";
import * as SharedTypes from "../../shared/types";

const API_URL = "https://dummyjson.com/carts";

const getAllCarts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createCart = async (productsData: SharedTypes.ICreateCartRequest) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(API_URL + `/add`, productsData, config);

  return response.data;
};

const deleteCart = async (cartId: string) => {
  const response = await axios.delete(API_URL + `/${cartId}`);

  return response.data;
};

const cartsService = {
  getAllCarts,
  createCart,
  deleteCart,
};

export default cartsService;
