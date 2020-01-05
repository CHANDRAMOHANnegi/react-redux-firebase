import { combineReducers } from "redux";
import auth from "./userReducer";
import search from "./SearchReducer";


export default combineReducers({ auth,search });