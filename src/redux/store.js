import { createStore, applyMiddleware } from "redux";    
import promiseMiddlware from "redux-promise-middleware";
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(promiseMiddlware));
