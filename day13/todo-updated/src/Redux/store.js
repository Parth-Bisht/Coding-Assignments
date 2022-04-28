import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { todosReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )