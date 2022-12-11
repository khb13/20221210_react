import { useState } from "react";

function TodoInput(){


    const [todos, setTodos] = useState([{text:"투두리스트 만들기", date:"2022/12/10" },
]);
    const [inputs, setInput] = useState({
        text:"",
        date:"",
    });

    const handleInput = (e) => {
        //객체의 프로퍼티 참조하는 방법 2가지 중 하나 ["문자열"] → 동적 프로퍼티 업데이트
        const { name, value } = e.target;
        const newInputs = {
            ...inputs,
            [name] : value,
        }
        setInput(
            
            newInputs
        );
        
    };

    console.log(inputs);

    
    const handleSubmit = () => {
        //객체나 배열을 업데이트 할 때는 불변성을 지켜야한다. → 지키지 않으면 상태 변화를 감지할 수 없다.
        // setTodos([...todos, input]); //스프레드 사용하는 것을 잊지 말 것!
        //┌→ 새로운 객체를 생성하는 방식으로 작성됨
        setTodos(todos.concat(inputs));
        setInput("");
    };

    return <div>
        <input /*여기 있는 인풋을 들고오는 것임.*/
        type="text"  
        onChange={handleInput} 
        value={inputs.text} 
        name="text"
        />
        <br />
        <input type="text" name="date" onchange={handleInput}/>
        <button onClick={handleSubmit}>등록</button>
            <ul>
                {todos.map((todo, idx) => (
                <li key={idx}>{todo.text}</li>
                ))}
            </ul>
    </div>

}

export default TodoInput;