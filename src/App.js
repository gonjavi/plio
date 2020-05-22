import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />      
        <Switch> 
          <Route  exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
