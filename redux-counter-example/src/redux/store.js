import {createStore,combineReducers} from "redux"
import counterReducer from "./counterReducer"

const rootReducer=combineReducers({
    counter:counterReducer,
});

// enable REDUX DEVTools if available
const store= createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;