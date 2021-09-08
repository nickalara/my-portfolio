//Remove boilerplate
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
// Removing post and single post for now. Might use later as a template for something else.
// import SinglePost from "./components/SinglePost";
// import Post from "./components/Post";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import Project from "./components/Project";
import NavBar from './components/NavBar';

function App() {
  return (
    //Remove boilerplate
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        {/* Removing post and single post for now. Might use later as a template for something else. 
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' /> */}
        <Route component={WorkHistory} path='/workhistory' />
        <Route component={Education} path='/education' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
