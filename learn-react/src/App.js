// import Hello from "./components/Hello";
// import "./App.css";
// import TodoInput from "./components/TodoInput";
// import Counter from "./components/Counter"

import React, { useState, useEffect } from "react";
import Hello from "./components/Hello";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo"

function App() {
//새롭게 pull하면 npm i 해서 인스톨 해줘야함
//  const name = "seok";
//  const style = {
//   color: "red", backgroundColor: "palegreen"

//  }
  // return (
  //   <>
      
  //     {/* 조건부 렌더링
  //     {true && <Hello />} */}
      
  //     {/* <Counter /> */}

  //     <TodoInput />
  //   </>
  // );

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    //렌더링이 일어날 때마다 실행되는 코드
    console.log("랜더링");
  })

  useEffect(()=>{
    //[]안의 값에 변화가 있을 때에만 실행된다.
    console.log("count :", count);

  }, [count])

  useEffect(()=>{
    console.log("input :", input);

  }, [input])

  const handleCount = () => {
    setCount(count +1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = () =>{
    setToggle(!toggle);
  }


  return(
    <>
      <Todo />
   </>
  )
}

export default App;
