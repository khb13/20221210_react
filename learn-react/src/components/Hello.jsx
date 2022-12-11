//컴포넌트 만드는 과정
//함수 이름은 파스칼 케이스로 작성해야 한다.
//파스칼 케이스는 첫글자가 대문자
function Hello(/*props*/ {text, active, color}){ //함수명은 무조건 대문자여야 함. 리액트는 대문자로 시작해야 컴포넌트임을 인지함.
    // const {text, active}=props;
    return <h1 style={{color : active && color}}>Hello {text}{active && "!"}</h1>
}

Hello.defaultProps = {
    text: "React",
    color: "black",
}

export default Hello;