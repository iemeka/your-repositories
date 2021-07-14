import pageContent from "./pageContent";
import listOp from "./listOp";
import todoDisplay from "./todoDisplay";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  pageContent,
  listOp,
  todoDisplay
});

export default allReducers;
