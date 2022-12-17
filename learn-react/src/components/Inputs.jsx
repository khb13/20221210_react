import { useReducer } from "react";
import { useInputs } from "../hooks/useInputs";

// const initialState = {
//         email:"",
//         name:"",
// }

// //리듀스 함수 : 액션의 값에 따라 상태를 관리하는 함수
// function reducer(state, action){
//     switch(action.type){
//         case "CHANGE_INPUT":
//             return {
//                 ...state, 
//                 inputs: {
//                     ...state.inputs, 
//                     [action.name]: action.value,
//                 },
//             };
//         case "INCREASE_COUNTER":
//             return {
//                 ...state,
//                 counter: state.counter +1,
//             };
//         default:
//             return state;
//     }
// }

function Inputs(){

    //useReducer(리듀서 함수, 초기값) : [상태값, 디스패치 함수] 반환
     //dispatch는 액션을 발생시키는 함수
    const [state, dispatch] = useInputs({
            email:"",
            name:"",
            title:"",
         });
    const {name, email, title}  = state;

    console.log(state);
    
    const handleInputs = (e) => {
        const {name, value} = e.target;
        dispatch({type: "CHANGE_INPUT", name, value});
    };


    return(
        <div>
            <p>
                입력값 : {name} ({email}) {title}
            </p>
            <input type="text" onChange={handleInputs} name="name"/>
            <input type="text" onChange={handleInputs} name="email"/>
            <input type="text" onChange={handleInputs} name="title"/>
        </div>
    )
}

export default Inputs;