import reducer from "./App/reducer"
import { applyMiddleware, legacy_createStore, combineReducers } from "redux"
import thunk from "redux-thunk"


const getroot = combineReducers({ reducer })
const store = legacy_createStore(getroot, applyMiddleware(thunk))
export default store