import {combineReducers} from "redux";
import authReducer from "./auth.reducer";
import dataReducer from "./data.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  data: dataReducer
});

export default rootReducers;
