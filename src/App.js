import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Reacts from './components/react';
import Node from './components/node';
import Rails from './components/rails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Intro />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/react" component={Reacts} />
          <Route path="/node" component={Node} />
          <Route path="/rails" component={Rails} />
          <Route path="/html-css" component={Home} />
          <Route path="/javascript" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
