import Axios from "axios";

export const getProduct = (CategoryId, page, limit, search) => {
  return {
    type: "GET_PRODUCT",
    payload: Axios.get(`http://localhost:3000/product`, {
      params: {
        CategoryId,
        page,
        limit,
        search
      }
    })
  };
};

export const getProductById = id => {
  return {
    type: "GET_PRODUCT_ID",
    payload: Axios.get(`http://localhost:3000/product/${id}`)
  };
};
