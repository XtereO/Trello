import { combineReducers, createStore } from "redux";
import { mainReducer } from "./Reducers/MainReducer";

let rootReducer = combineReducers({
  main: mainReducer,
});
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export let store = createStore(rootReducer);
//@ts-ignore
window.store = store;
