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
