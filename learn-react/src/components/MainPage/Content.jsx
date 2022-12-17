import { useContext } from "react";
import { DarkModeContext, SetDarkModeContext } from "./Main";

function Content(){

    const darkMode = useContext(DarkModeContext);
    const onChangeMode = useContext(SetDarkModeContext);

    return(
        <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems:"center",
            flex: 1,
            backgroundColor: darkMode && "black",
            color: darkMode && "white",
            }}>
            메인 컨텐츠입니다!
            <button onClick={onChangeMode}>모드 변경</button>
        </div>
    )
}

export default Content;