import { combineReducers } from "redux";

import Branch from "./branch";
import Category from "./category";
import Product from "./product";

const rootReducer = combineReducers({
  Branch,
  Category,
  Product
});

export default rootReducer;
