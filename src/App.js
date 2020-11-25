import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/User/User.selectors";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/Checkout/Checkout";
import { selectCollectionForPreview } from "./redux/Shop/Shop.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {}

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
  collectionsArray: selectCollectionForPreview,
});

export default connect(mapStateToProps)(App);
