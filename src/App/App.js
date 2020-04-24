import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Home/Home';
import Ace from 'Ace/Ace';
import Monaco from 'Monaco/Monaco';
import Codemirror from 'Codemirror/Codemirror';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/ace' component={Ace} />
          <Route path='/monaco' component={Monaco} />
          <Route path='/codemirror' component={Codemirror} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
