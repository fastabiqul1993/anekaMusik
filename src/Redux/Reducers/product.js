const initialState = {
  productList: [],
  totalProduct: 0,
  productById: {},
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODUCT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        productList: action.payload.data.response.rows,
        totalProduct: action.payload.data.response.count
      };

    case "GET_PRODUCT_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PRODUCT_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODUCT_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        productById: action.payload.data.response
      };

    default:
      return state;
  }
};

export default Product;
