import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Sanju">
        <p>My age is 23</p>
      </Greet>
      <Greet name="Dilshan" />
      <Welcome name="Kamal" /> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
