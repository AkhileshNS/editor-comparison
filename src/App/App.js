import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Home/Home';
import Ace from 'Ace/Ace';
import Monaco from 'Monaco/Monaco';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/ace' component={Ace} />
          <Route path='/monaco' component={Monaco} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
