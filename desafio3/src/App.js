import React from 'react';
import style from './components/style.css';

const hello = "hello world"

function App() {
  const hello = "hello world"
  return (
    <div className="App">
      <h1>Desafio 3</h1>
      <p>{HelloWorld()}</p>
    </div>
  );
}

function HelloWorld(){
  const txt = [
    hello.toUpperCase() + " " + dataAtual(),
    hello.toLowerCase() + " "  + dataAtual(),
    hello.split("").join(" ") + " "  + dataAtual(),
    hello.split("") + " " + dataAtual(),
    hello.toLowerCase().split('').join('*') + dataAtual(),
    hello.split("").reverse().join("") + " "  + dataAtual(),
    hello.split(" ").reverse().join(" ") + " "  + dataAtual(),
    hello.split("").reverse().join("!") + " "  + dataAtual(),
    hello.split("").join(' ,') + " " + dataAtual(),
    hello.split("").reverse().join("-") + " "  + dataAtual(),
  ];
return txt.map((txt) => <li>{txt}</li>)
}

function dataAtual() {
  let data = new Date().toLocaleString();
  return data;
}


export default App;