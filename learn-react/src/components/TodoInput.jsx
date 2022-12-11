import { useState, useRef, useMemo, useCallback } from "react";

function TodoInput({handleSubmit}){

    const [inputs, setInputs] = useState({
        text:"",
        date:"",
    });

    const handleInput = useCallback((e) => {
        //객체의 프로퍼티 참조하는 방법 2가지 중 하나 ["문자열"] → 동적 프로퍼티 업데이트
        const { name, value } = e.target;
        const newInputs = {
            ...inputs,
            [name] : value,
        }
        setInputs(newInputs);
        },
        [inputs]
    );

    return <div>
        <input /*여기 있는 인풋을 들고오는 것임.*/
            type="text"  
            onChange={handleInput} 
            value={inputs.text} 
            name="text"
        />
        <input 
            type="text"
            name="date" 
            onChange={handleInput}
            value={inputs.date}
        />
        <button onClick={()=>handleSubmit(inputs)}>등록</button>
            
    </div>

}

export default TodoInput;