import React from 'react';
import Navbar from './components/Navbar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Design from './components/pages/Design';
import Development from './components/pages/Development';
import Contact from './components/pages/Contact';

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Switch>
               <Route path='/' exact component={Home} />
               <Route path='/design' exact component={Design} />
               <Route path='/development' exact component={Development} />
               <Route path='/contact' exact component={Contact} />
            </Switch>
         </Router>
      </>
   );
}

export default App;
