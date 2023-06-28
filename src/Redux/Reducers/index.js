import { combineReducers } from "redux";
import oddevenHistoryReducer from "./OddEvenReducer/OddEvenReducer";

const rootReducer = combineReducers({
    oddeven: oddevenHistoryReducer,
});

export default rootReducer;