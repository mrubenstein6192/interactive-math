import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import AboutMe from "./pages/AboutMe";
// import Navbar from "./components/navbar";
// import Contacts from './pages/Contact';
// import axios from 'axios';

function App() {
  return (
    <Router>
      <div>
      {/* <Navbar /> */}
      {/* <Switch> */}
        <Route exact path = "/" component = {Home} />
        {/* <Route exact path = "/home" component = {Home} />
        <Route exact path = "/AboutMe" component = {AboutMe} />
        <Route exact path = "/Projects" component = {Projects} />
        <Route exact path = "/Contact" component = {Contacts} /> */}
        
        {/* <Route render = {() => <h2>404 page!</h2>} /> */}
      {/* </Switch> */}

     </div>
  </Router>

  )
}

export default App;
