import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Inline />
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Counter />
      <Message /> */}
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
