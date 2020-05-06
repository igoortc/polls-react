import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Wrapper } from "./components/Wrapper";

import NewQuestion from "./containers/NewQuestion";
import Questions from "./containers/Questions";
import QuestionDetail from "./containers/QuestionDetail";

export default () => (
  <div>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route exact path="/questions/:pollId" component={QuestionDetail} />
        <Route exact path="/new" component={NewQuestion} />
        <Redirect to="/" />
      </Switch>
    </Wrapper>
  </div>
);
