import React from "react";
import { Switch, Route, BackButton } from 'react-router'

import SignInFormContainer from './session_form/sign_in_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPageContainer from './splash/splash_page_container';
import SearchPageContainer from './search/search_page_container';
import VideoPageContainer from './video_page/video_page_container'
import VideoFormContainer from './video_form/video_form_container'
import About from './about_footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


//NB: also functional component
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path = "/videos/new" component={VideoFormContainer} />
      <Route exact path = "/videos/:videoId" component={VideoPageContainer} />
      <Route exact path = "/search/:s_term" component={SearchPageContainer} />
      <Route path = "/" component = {SplashPageContainer} />
    </Switch>
    <About/>
  </div>
);

export default App;
