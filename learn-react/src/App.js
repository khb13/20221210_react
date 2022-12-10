import Hello from "./components/Hello";
import "./App.css";

function App() {

  /*
  JSX
    1. 무조건 하나의 태그로 감싸서 반환해야 한다. → 프래그먼트를 이용하면 하나로 묶을 수 있다.
    2. 닫는 태그를 생략할 때는 셀프 클로징 태그를 사용해야함.
    3. JSX 안에 자바스크립트 값을 포함시킬 때는 {} 안에 작성한다.
    4. 스타일 속성에 객체 형태로 전달한다. → 여러 단어인 속성은 카멜 케이스를 사용한다.
    5. class는 className 속성으로 할당한다.
    6. 컴포넌트는 무조건 대괄호로 시작한다.
  */

    //새롭게 pull하면 npm i 해서 인스톨 해줘야함
 const name = "seok";
 const style = {
  color: "red", backgroundColor: "palegreen"

 }
  return (
    <>
      <Hello />
      <p style={style} className="content">
        안녕하세요. {name}
        </p>
    </>
  );
}

export default App;
