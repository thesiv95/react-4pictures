import React from 'react';
import Block from "./components/Block";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Block imgSrc={'img/1.jpg'} imgAlt={'img1'}/>
        <Block imgSrc={'img/2.jpg'} imgAlt={'img2'}/>
        <Block imgSrc={'img/3.jpg'} imgAlt={'img3'}/>
        <Block imgSrc={'img/4.jpg'} imgAlt={'img4'}/>
      </div>
    </div>
  );
}

export default App;
