import React, { Component } from 'react';
import {
  Link,
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const LinksComponent = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <div>{item.name}</div>
      })}
    </div>
  )
}

const LComponent = ({ items }) => (
  <div>
    <Switch>
      <Router>
        <Route
          path="/him"
          render={() => (
            <LinksComponent />
          )}
        />
      </Router>
    </Switch>
  </div>
)


export default LComponent;
