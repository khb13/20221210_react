import Slider from "./components/Slider";
import { createGlobalStyle } from "styled-components";
import Section from "./components/Section";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;
  }
  
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Section />
    </div>
  );
}

export default App;
