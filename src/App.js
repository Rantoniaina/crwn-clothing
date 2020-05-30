import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Shop from './pages/Shop/Shop';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signIn" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
