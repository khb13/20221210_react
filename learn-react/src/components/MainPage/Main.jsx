import { useState, createContext } from "react";
import Content from "./Content";
import Header from "./Header";

//컨텍스트 생성 → 값을 사용하는 컴포넌트에서 useContext의 인자로 전달되어야 한다.
// → createContext의 인자로 전달한 값은 기본값 → Provider로 감싸지 않은 컴포넌트에서 사용 시 반환되는 값
export const DarkModeContext = createContext(null);
export const SetDarkModeContext = createContext(null);

function Main() {
    const[darkMode, setDarkMode] = useState(false);

    const onChangeMode=()=>{
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={darkMode}>
            <SetDarkModeContext.Provider value={onChangeMode}>
                <div style={{
                    display: "flex", 
                    flexDirection:"column",
                    height: "100vh",
                    }}>
                    <Header>
                        <h1>sdsd</h1>
                    </Header> 
                    <Content />
                </div> 
            </SetDarkModeContext.Provider>
        </DarkModeContext.Provider>
        
    );
    
}

export default Main;