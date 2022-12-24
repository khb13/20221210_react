# React Router

url에 따라 컴포넌트를 선택적으로 렌더링할 수 있다. 새로고침이 일어나지 않고 부분적으로만 렌더링이 일어나기 때문에 SPA(Single Page Application)을 개발할 수 있다. 

---

## 설치 방법

    npm install react-router-dom

---

### BrowserRouter

React Router를 사용하고자 하는 컴포넌트를 BrowserRouter로 감싸야한다.
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

### Routes, Route

라우팅을 할 때는 Routes 안에 Route를 통해서 url에 따라 렌더링 될 컴포넌트를 작성한다.

```javascript
<Routes>
  <Route path="" element={<컴포넌트 />} />
</Routes>
```

---

### 중첩 라우팅

라우팅된 컴포넌트 안에서 다시 라우팅을 할 수 있다.

```javascript
<Routes>
  <Route path="/hello/*" elements={<Hello />}>
    <Route path="1" elements={<div>1번 컴포넌트</div>} />
    <Route path="2" elements={<div>2번 컴포넌트</div>} />
  </Route>
</Routes>
```

Route 안에 중첩해서 Route를 작성할 수 있다. 상위 라우팅된 컴포넌트에서 Outlet을 렌더링 하면 된다.

```javascript
function Hello(){
    return (
        <div>
        <h1>Hello 컴포넌트</h1>
        <Outlet />
        <div>
    );
}
```

url이 정확히 /hello인 경우에는 Outlet이 렌더링 되지 않고, /hello/1은 1번 컴포넌트 /hello/2는 2번 컴포넌트가 렌더링 된다.

---

### useParmas
url에서 파라미터를 받아올 수 있다. ex) /hello:id => id라는 이름으로 파라미터를 받을 수 있다.

```javascript
<Routes>
    <Route path = "/users" element={<UserList />}/>
    <Route path = "/users/:id" element={<Detail />} />
</Routes>
```

url이 딱 /users로 맞아떨어지면 UserList 컴포넌트가, 그 뒤에 다른 값이 오면 Detail 컴포넌트가 렌더링된다.

그리고 Detail 컴포넌트에서 파라미터(id) 값을 useParams를 통해서 읽어올 수 있다. 파라미터의 이름은 path에 기입된 **:파라미터 이름**에 따라 달라진다. useParams의 리턴값은 객체이다.

---

### useSearchParams
쿼리 스트링을 간편하게 변환하여 사용할 수 있다. useSearchParams를 사용하면 배열을 리턴하는데 첫번째 값이 객체이다. 그 객체의 get 매서드를 통해서 쿼리값들을 읽어올 수 있다. 쿼리값은 key=value, key2=value2...의 형태로 전달된다. 파라미터보다 복잡하고 여러 개의 값을 전달해야될 때는 쿼리 스트링을 사용한다.

```javascript
function Detail() {
    const [searchParams] = useSearchParams();

    const email = searchParams.get("email");
    const age = searchParams.get("age");
    return <div>
        <h1>{email}</h1>
        <h2>{age}</h2>
    </div>
}
```

---

### useNavigate
Link 컴포넌트가 아닌 다른 방법으로 url을 변경할 때 사용한다. useNavigate()의 반환값은 함수로, 인자로 url을 전달하면 변경된다. 주의사항으로 앞에 /가 붙었을 때와 붙지 않았을 때 다르게 동작한다. /를 붙이면 base url의 끝에 문자열을 붙이지만, /를 생략하면 현재 url 주소 끝에 붙인다.

```javascript
function Hello(){
    const navigate = useNavigate();
    return (
        <div>
            <h1> Hello 컴포넌트 </h1>
            <p onClick={() => navigate("/users")}>유저목록 보기 </p>
        </div>
    )
}
```



