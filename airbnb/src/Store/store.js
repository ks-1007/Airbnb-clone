import { applyMiddleware, createStore } from "redux";
import { reducerfunc } from "./reducer";
import thunk from "redux-thunk";

export const store = new createStore(reducerfunc, applyMiddleware(thunk));
