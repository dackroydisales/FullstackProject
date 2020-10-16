import React from "react";
import { Switch, Route } from 'react-router';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPageContainer from './splash/splash_page_container';
import { AuthRoute } from '../util/route_util';


//NB: also functional component
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path = "/" component = {SplashPageContainer} />
    </Switch>
  </div>
);

export default App;
