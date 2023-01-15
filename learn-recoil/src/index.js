import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { configure } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, todosReducer02 } from "./state/todos_redux";
import { counterReducer } from "./state/counter";
import "./utils/lang";

import counterReducer03 from "./state/counter";
import todoReducer03 from "./state/todos_redux";

const store = configureStore({
  reducer: {
    counter: counterReducer03,
    todos: todoReducer03,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);
