import { combineReducers } from "redux";
import book from "./book.js";
import information from './information.js';
export default combineReducers({
  book,
  information
});