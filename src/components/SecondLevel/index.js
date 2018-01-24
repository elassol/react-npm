import React from 'react';
import {
  Link,
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ThirdLevel from '../ThirdLevel/index';

const SecondLevel = ({ items }) => (
  <div>
    {items.map((item) => (
      <div><Link to={`/${item.name}`}>{item.name}</Link></div>
    ))}
  </div>
)

const component = ({ previousCategories, items }) => (
  <div>
    <Switch>
      {previousCategories.map((item) => (
        <Route
          path={`/${item.name}`}
          render={() => (
            <SecondLevel
              items={items}
            />
          )}
        />
      ))}
      {items.map((item) => (
        <Route
          path={`/him/${item.name}`}
          render={() => (
            <ThirdLevel
              items={items.find(i => i.name === item.name).edits}
              previousCategories={items}
            />
          )}
        />
      ))}
    </Switch>
 </div>
)


export default component;
