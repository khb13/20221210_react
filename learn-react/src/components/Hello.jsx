//컴포넌트 만드는 과정
//함수 이름은 파스칼 케이스로 작성해야 한다.

import { useEffect, useState } from "react";

//파스칼 케이스는 첫글자가 대문자
function Hello(/*props*/ {text, active, color}){ //함수명은 무조건 대문자여야 함. 리액트는 대문자로 시작해야 컴포넌트임을 인지함.
    // const {text, active}=props;
/*
    JSX
    1. 무조건 하나의 태그로 감싸서 반환해야 한다. → 프래그먼트를 이용하면 하나로 묶을 수 있다.
    2. 닫는 태그를 생략할 때는 셀프 클로징 태그를 사용해야함.
    3. JSX 안에 자바스크립트 값을 포함시킬 때는 {} 안에 작성한다.
    4. 스타일 속성에 객체 형태로 전달한다. → 여러 단어인 속성은 카멜 케이스를 사용한다.
    5. class는 className 속성으로 할당한다.
    6. 컴포넌트는 무조건 대괄호로 시작한다.
  */

    const [input, setInput] = useState("");

    const handleInput=(e) =>{
        setInput(e.target.value);
    }

    useEffect(()=> {
        console.log("Hello 컴퍼넌트 렌더링")
    });

    useEffect(()=> {
        //화면에 처음 나타날 때 한 번만 실행된다. → setTimeout, setInterval 세팅을 하거나 서버에서 데이터를 받아오는 작업, 라이브러리 연동 작업 등
        console.log("Hello 컴포넌트 마운트 됨");
        const timer = setInterval(()=> {
            console.log("1초 경과");
        }, 1000);

        return () => {
            //화면에서 사라질 때 (언마운트) 실행된다. → 뒷정리 함수, 클린업 함수, clearTimeout, clearInterval, 인스턴스 삭제 등
            console.log("언마운트 됨");
            clearInterval(timer);
        }

    }, [])

    return (
        <>
        <h1 style={{color : active && color}}>Hello {text}{active && "!"}</h1>
        <input type="text" onChange={handleInput} />
        </>
    )
}

Hello.defaultProps = {
    text: "React",
    color: "black",
}

export default Hello;