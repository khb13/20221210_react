import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todos from './components/todoReducer/Todos';
import Main from './components/MainPage/Main';
import Inputs from './components/Inputs';
import Styled from './components/Styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Todos />
);
// <React.StrictMode>는 성능 문제로 2번씩 호출하기 위해서 <App />를 감싸고 있음.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
