import React from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
