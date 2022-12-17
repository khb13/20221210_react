import { useReducer, useState } from "react"

//커스텀 훅

function reducer(state, action){
    switch(action.type){
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.name]:action.value};
        default:
            return state;
    }
}

export function useInputs(initialState){
    const [state, dispatch] = useReducer(reducer, initialState)
    return  [state, dispatch]
}

// function useInputs02(initialState){
//     const [inputs, setInputs] = useState(initiaState)
//     const onChange = (e) => {
//         const{name, value} = e.target;
//         setInputs({...inputs, [name]: value});
//     };
//     const reset = () => {
//         setInputs(initialState);
//     };
//     return [inputs, onChange, reset];
// }