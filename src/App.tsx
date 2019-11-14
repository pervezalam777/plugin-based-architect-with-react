import React from 'react';
import './App.css';
import {
  TopBar,
  BottomBar,
  ContentArea,
  LeftBar 
} from "./core"

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar/>
      <LeftBar />
      <ContentArea />
      <BottomBar />
    </div>
  );
}

export default App;
