import React from "react";
import { Switch, Route } from 'react-router'

import SignInFormContainer from './session_form/sign_in_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPageContainer from './splash/splash_page_container';
import VideoPageContainer from './video_page/video_page_container'
import { AuthRoute } from '../util/route_util';


//NB: also functional component
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path = "/videos/:videoId" component={VideoPageContainer} />
      <Route exact path = "/videos" component={SplashPageContainer} />
      <Route path = "/" component = {SplashPageContainer} />
    </Switch>
  </div>
);

export default App;
