import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const iniState = {
    todos:[],
}

export const store = legacy_createStore(reducer,iniState)