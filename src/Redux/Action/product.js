import Axios from "axios";

export const getProduct = (CategoryId, page, search) => {
  return {
    type: "GET_PRODUCT",
    payload: Axios.get(`http://localhost:3000/product`, {
      params: {
        CategoryId: CategoryId,
        page: page,
        search: search
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
