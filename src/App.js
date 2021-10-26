import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// other JS files
import { Navbar } from "./navbar";
import { Home } from "./home";
import { Cart } from "./cart";
import { Error } from "./error";
import { BookProfile } from './book-display';

function App() {
    return (
        <div className="body">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/book/:id" children={<BookProfile />}>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </div>
    );
}

export default App;
