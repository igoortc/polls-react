import React from "react"
import { Route, Switch } from "react-router-dom"

import { Wrapper } from "./components/Wrapper"

import { Questions } from "./containers/Questions"

export default () => (
  <div>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Questions} />
      </Switch>
    </Wrapper>
  </div>
);
