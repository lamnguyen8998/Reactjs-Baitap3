import { combineReducers } from "redux";
import userReducer from "./user";
import BaiTapOanTuXiReducer from "../BaiTapOanTuXiReducer";

const rootReducer = combineReducers({
  // Tập hợp tất cả các reducer con ở đây
  userReducer,
  // state bài tập oẳn tù xì
  BaiTapOanTuXiReducer,
});

export default rootReducer;
