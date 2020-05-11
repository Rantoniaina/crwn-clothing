import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
