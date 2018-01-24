import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import data from '../../data.js'
import SecondLevel from '../SecondLevel/index';

const items = data;
const GenderComponent = () => (
  <div>
    {items.map(item => (
      <div><Link to={`/${item.name}`}>{item.name}</Link></div>
    ))}
  </div>
)
const TopLevel = () => (
    <Router>
      <Switch>
      {items.map((item) => (
        <Route
          path={`/${item.name}`}
          render={() => (
            <SecondLevel
              items={items.find(i => i.name === item.name).edits}
              previousCategories={items}
            />
          )}
        />
      ))}
        <Route
          exact
          path="/"
          component={GenderComponent}
        />
      </Switch>
    </Router>
  );




ReactDOM.render( <TopLevel />, document.querySelector( '#app' ) );
