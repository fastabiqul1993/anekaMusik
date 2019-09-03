const initialState = {
  branchList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Branch = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BRANCH_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_BRANCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_BRANCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        branchList: action.payload.data.response.rows
      };

    default:
      return state;
  }
};

export default Branch;
