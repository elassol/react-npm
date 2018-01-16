import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LComponent from './LinksComponent';

const Main = () => (
  <div>
    <div><Link to="/him">Him</Link></div>
    <div><Link to="/her">Her</Link></div>
    <div><Link to="/kids">Kids</Link></div>
  </div>
)


const Panel = ( {items} ) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
          />
          <Route
            path="/him"
            render={() => (
              <LComponent
                items={items}
              />
            )}
          />
        </Switch>

      </div>

    </Router>
  );
}




ReactDOM.render( <Panel />, document.querySelector( '#app' ) );
