import React from 'react';
import { Route } from 'react-router-dom'; 

import Header from './components/header/header.compoent';
import Home from './pages/home/home';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </>
  );
}

export default App;
