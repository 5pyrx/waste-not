import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

import Header from '../Header/Header';
import UserSignUp from '../UserSignUp/UserSignUp';
import UserSignIn from '../UserSignIn/UserSignIn';
import UserSignOut from '../UserSignOut/UserSignOut';
import Authenticated from '../../containers/Authenticated/Authenticated';
import NotFound from '../NotFound/NotFound';
import LandingPage from '../../containers/LandingPage/LandingPage';
import KitchenPantry from '../../containers/KitchenPantry/KitchenPantry';
import Footer from '../Footer/Footer';


function Application() {
  const user = useContext(UserContext);
  return (
    user ?
    <Router>
      <Header />
      <Authenticated path="/auth-dashboard" />
      <Route path="/your-pantry" component={KitchenPantry} />
      <Footer />
    </Router>
    :
    <Router>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/signin" component={UserSignIn} />
      <Route path="/signup" component={UserSignUp} />
      <Route path="/signout" component={UserSignOut} />
      <Route component={NotFound} />
      <Footer />
    </Router>
  );
}

export default Application;
