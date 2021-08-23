import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Participants from "./pages/ParticipantJoin";
import ParticipantResult from "./pages/ParticipantResult"
import AdminResult from "./pages/AdminResult"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/participants/join">
          <Participants />
        </Route>
        <Route path="/participants/result">
          <ParticipantResult />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/admin/result">
          <AdminResult />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
