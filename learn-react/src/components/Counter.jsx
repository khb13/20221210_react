import { useState } from "react";

function Counter() {
    /* 
        상태값 : 컴포넌트가 갖고 있는 상태값. → 상태값이 변하면 렌더링이 다시 일어난다.
        useState(초기값) : [상태값, 업데이트 함수] 
            → useState는 비동기적으로 동작한다.
            → 함수형 업데이트 : useState의 인자로 함수를 전달하면 매개변수에 최신상태가 담긴다.
    */
    const [count, setCount] =useState(0); //변수명을 자유롭게 정하기 위해서 대괄호 사용

    const handleCount = (opNum)=>{
        if(opNum<0 && count <= 0) return;
        setCount((count) => count + opNum);
        setCount((count) => count + opNum);
        setCount((count) => count + opNum);
    }

    console.log("랜더링!");

    return(
        <div>
            <h3>{count}</h3>
            {/* 이벤트 바인딩 시 함수를 전달한다. → 함수 호출 결과를 전달하는 것이 아님.
                → 인자가 필요할 경우 익명함수 안에서 호출하는 형태로 작성한다.
            */}
            <button onClick={()=>handleCount(1)}>+1</button>
            <button onClick={()=>handleCount(-1)}>-1</button>
        </div>
    )
}

export default Counter;