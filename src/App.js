import React, {useState} from 'react';
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
import LifeCycleA from './components/LifeCycleA';
import Header from "./components/Routes/Header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ErrorPage from "./pages/404Page";
import HomePage from "./pages/Homepage";
import SubPage from "./pages/SubPage";
import Post from "./pages/Post";
import PostForm from "./api/PostForm";
import Login from "./pages/Login";
import ClassCounter from "./components/hooks/ClassCounter";
import HookCounter from "./components/hooks/HookCounter";
import HookCounterTwo from "./components/hooks/HookCounterTwo";
import HookCounterThree from "./components/hooks/HookCounterThree";

export default App;

function App() {
    const [login, setLogin] = useState(false);
    return (
        <BrowserRouter basename='/develop'>
            <div className="main-header">
                <Header/>
                <button onClick={() => setLogin(!login)}>
                    {
                        login ? 'Log Out' : 'Log In'
                    }
                </button>
                <ClassCounter/>
                <br/>
                <HookCounter/>
                <HookCounterTwo />
                <HookCounterThree />
            </div>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/post/:id" component={Post}/>
                <Route path="/form" component={PostForm}/>
                <Route path="/sub">
                    <SubPage login={login}/>
                </Route>
                <Route path="/login" component={Login}/>
                <Route component={ErrorPage}/>
            </Switch>
            {/*<LifeCycleA />*/}
        </BrowserRouter>

        // <div className="App">
        //   <LifeCycleA />
        //   {/* <Inline /> */}
        //   {/* <Stylesheet primary={true} /> */}
        //   {/* <NameList /> */}
        //   {/* <UserGreeting /> */}
        //   {/* <ParentComponent /> */}
        //   {/* <FunctionClick />
        //   <ClassClick /> */}
        //   {/* <EventBind /> */}
        //   {/* <Counter />
        //   <Message /> */}
        //   {/* <Greet name="Sanju">
        //     <p>My age is 23</p>
        //   </Greet>
        //   <Greet name="Dilshan" />
        //   <Welcome name="Kamal" /> */}
        //   {/* <Hello/> */}
        // </div>
    );
}
