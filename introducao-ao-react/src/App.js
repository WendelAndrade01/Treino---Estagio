import "./App.css";
import HelloWorld_07 from "./components/HelloWord_07";
import HelloWorld from "./components/HelloWorld";
import HelloWorld_02 from "./components/HelloWorld_02";
import HelloWorld_03 from "./components/HelloWorld_03";
import HelloWorld_04 from "./components/HelloWorld_04";
import HelloWorld_05 from "./components/HelloWorld_05";
import HelloWorld_06 from "./components/HelloWorld_06";
import HelloWorld_08 from "./components/HelloWorld_08";
import HelloWorld_09 from "./components/HelloWorld_09";
import HelloWorld_10 from "./components/HelloWorld_10";

function App() {
  return (
    <div className="container">
      <HelloWorld />
      <HelloWorld_02 />
      <HelloWorld_03 />
      <HelloWorld_04 />
      <HelloWorld_05 />
      <HelloWorld_06 />
      <HelloWorld_07 hello="Hello World!" data="2022//06/28" />
      <HelloWorld_08 />
      <HelloWorld_09 />
      <HelloWorld_10 />
    </div>
  );
}

export default App;
