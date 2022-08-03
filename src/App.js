import React from 'react';
import './App.css';
import './componentes/Header/style.css';
import './componentes/HomePage/style.css';
import './componentes/Footer/style.css';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HomePage from './componentes/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;