import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Accounts from '../Page/Accounts';
import Documents from '../Page/Documents';
import Landings from '../Page/Landings';
import Pages from '../Page/Pages';
const Navbar = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landings} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/documents" component={Documents} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Navbar;
