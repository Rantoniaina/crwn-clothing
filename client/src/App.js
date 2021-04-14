import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/User/User.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/User/User.actions";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/Spinner/Spinner";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const SignInSignUp = lazy(() => import("./pages/SignInSignUp/SignInSignUp"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route excact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signIn"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (disptach) => ({
  checkUserSession: () => disptach(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
