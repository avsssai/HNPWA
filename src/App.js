import React, { Component } from "react";
import classes from "./App.module.css";
import Top from "./Components/Top/Top";
import Newest from './Components/Newest/Newest';
import Ask from "./Components/Ask/Ask";
import Toolbar from "./Controllers/Toolbar/Toolbar";
import Show from './Components/Show/Show';
import Jobs from './Components/Jobs/Jobs';
// import Home from "./Home/Home";
import Comments from './Controllers/Comments/Comments';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Router>
          <Toolbar />

          <Switch>
            <Route exact path="/" component={Top}  />
            <Route exact path="/top" component={Top}  />
            <Route exact path="/newest" component={Newest} />
            <Route exact path="/ask" component={Ask} />
            <Route exact path="/show" component={Show} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/comments/:id" component={Comments} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
