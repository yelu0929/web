import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createBrowserHistory, createHashHistory } from "history";
import configureStore from "./configureStore";
import Tools from "utils/tools";
import * as serviceWorker from "./serviceWorker";

const history = createHashHistory();

// 从window对象中获取初始state
const initialState = (window as any).initialReduxState;
// 配置store
const store = configureStore(history, initialState);

ReactDOM.render(<App store={store} history={history}/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
