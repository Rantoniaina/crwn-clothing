import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument, addCollectiionAndDocuments } from './firebase/Firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/User/User.actions';
import { selectCurrentUser } from './redux/User/User.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/Checkout/Checkout';
import { selectCollectionForPreview } from './redux/Shop/Shop.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectiionAndDocuments('collections', collectionsArray)
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
          <Route excact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
