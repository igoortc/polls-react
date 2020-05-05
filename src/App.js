import React from "react"
import { Route, Switch } from "react-router-dom"

import { Wrapper } from "./components/Wrapper"

import Questions from "./containers/Questions"
import QuestionDetail from "./containers/QuestionDetail"

export default () => (
  <div>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route exact path="/poll/questions/:pollId" component={QuestionDetail} />
      </Switch>
    </Wrapper>
  </div>
);
