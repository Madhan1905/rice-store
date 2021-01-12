import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserHome from './UserScreens/UserHome';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/' exact component = {UserHome}/>
          {/* <Route component= {ErrorScreen}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
