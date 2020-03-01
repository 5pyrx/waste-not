import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './containers/LandingPage/LandingPage';
import KitchenPantry from './containers/KitchenPantry/KitchenPantry';
import Footer from './components/Footer/Footer'

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/your-pantry" component={KitchenPantry} />
    <Footer />
  </BrowserRouter>
);

export default App;
