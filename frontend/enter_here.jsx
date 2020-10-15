import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

// TESTING START

// import { signup, login, logout } from './actions/session_actions';
// import { signup, login, logout } from './util/session_api_util'
  // TESTING END


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
      store = configureStore();
}
  // TESTING START
  // window.login = login;


  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // // TESTING END

  ReactDOM.render(<Root store={store} />, root);

});