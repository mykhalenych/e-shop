import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import { Container } from "react-bootstrap";
import Menu from "./Components/Menu/Menu";
import Buscet from "./Components/Buscet/Buscet";

const App = () => {
  return (
    <Router>
      <Container fluid className="px-0 bg-light">
        <Menu />
        <Switch>
          <Route path="/e-shop/" exact>
            <Main />
          </Route>
          <Route path="/e-shop/buscet">
            <Buscet />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
