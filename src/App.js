import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactUs from './UserScreens/ContactUs';
import UserHome from './UserScreens/UserHome';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/' exact component = {UserHome}/>
          <Route path = '/contact' exact component = {ContactUs}/>
          {/* <Route component= {ErrorScreen}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
