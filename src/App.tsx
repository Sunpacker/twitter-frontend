import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { Auth } from './pages/Auth'


const App = () => {
  return (
    <div className="App">
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/auth" component={Auth} />
			</Switch>
    </div>
  );
}

export default App
