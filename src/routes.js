import React from "react";
import { Start } from "./views/Start";
import { Players } from "./views/Players";
import { Game } from "./views/Game";
import { NoMatch } from "./views/NoMatch";
import { NavBar } from "./components/NavBar";
import { Scores } from "./views/Scores";
import { Rules } from "./views/Rules";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/start" component={Start} />
        <Route exact path="/">
          <Redirect to="/start" />
        </Route>
        <Route exact path="/players" component={Players} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/scores" component={Scores} />
        <Route exact path="/rules" component={Rules} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
