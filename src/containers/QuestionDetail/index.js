import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPollDetail } from "../../store/actions/polls";

import { sanitizeDate } from "../../utils/date"

import { Card, CardTitle, CardDescription } from "../../components/Card";
import { CleanLink } from "../../components/CleanLink";
import { Title } from "../../components/Title";

export class QuestionDetail extends Component {

  componentDidMount = () => {
    const { pollId } = this.props.match.params
    const { fetchPollDetail } = this.props;
    fetchPollDetail(pollId);
  }

  render() {
    const { poll, loaded } = this.props;

    const choices = poll.choices && poll.choices.map(choice => {
      return <li key={choice.url}>{choice.choice} ({choice.votes} {choice.votes === 1 ? 'vote' : 'votes'})</li>
    })

    return (
      <>
        <Title>
          <CleanLink to="/">
            <span role="img" aria-label="Go back home!" alt="Go back home!">⬅️</span> Questions App!
          </CleanLink>
        </Title>
        {loaded ? <Card>
          <CardTitle noMargin>{poll.question}</CardTitle>
          <CardDescription small>
            <span role="img" aria-label="Time">⏰</span> Published on {sanitizeDate(poll.published_at)}
          </CardDescription>
          <CardDescription>
            <ul>
              {choices}
            </ul>
          </CardDescription>
        </Card> : 'Loading...'}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    poll: state.pollsReducer.poll,
    loaded: state.pollsReducer.loaded
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPollDetail: id => dispatch(fetchPollDetail(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionDetail)
);
