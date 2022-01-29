import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
