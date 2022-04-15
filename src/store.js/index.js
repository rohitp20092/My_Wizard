import { createStore } from "redux";
import rootReducer from "../reducer.js/index.js";
const store = createStore(rootReducer);
export default store;