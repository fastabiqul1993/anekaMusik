const initialState = {
  categoryList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_CATEGORY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CATEGORY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: action.payload.data.response.rows
      };

    default:
      return state;
  }
};

export default Category;
