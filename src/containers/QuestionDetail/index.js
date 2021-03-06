import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPollDetail, updateVotes } from "../../store/actions/polls";

import { sanitizeDate } from "../../utils/date"

import { PrimaryButton } from "../../components/Button";
import { Card, CardTitle, CardDescription } from "../../components/Card";
import { CleanLink } from "../../components/CleanLink";
import { Title } from "../../components/Title";

export class QuestionDetail extends Component {

  state = {
    currentChoice: null,
    voted: false,
  }

  componentDidMount = () => {
    const { pollId } = this.props.match.params
    const { fetchPollDetail } = this.props;
    fetchPollDetail(pollId);
  }

  setChoice = event => {
    this.setState({
      currentChoice: event.target.value
    })
  }

  submitVote = () => {
    const { updateVotes } = this.props;
    const { currentChoice } = this.state;
    updateVotes(currentChoice);
    this.setState({
      voted: true
    })
  }

  render() {
    const { poll, loaded, error, vote } = this.props;
    const { currentChoice, voted } = this.state;

    const choices = poll.choices && poll.choices.map(choice => (
        <p key={choice.url}>
          <input type="radio" value={choice.url} name={poll.url} />
          {choice.choice} ({choice.votes} {choice.votes === 1 ? 'vote' : 'votes'})
        </p>
      )
    )

    return (
      <>
        <Title>
          <CleanLink to="/">
            <span role="img" aria-label="Go back home!" alt="Go back home!">⬅️</span> Questions App!
          </CleanLink>
        </Title>
          {loaded && !error ? 
            <Card>
              <CardTitle noMargin>{poll.question}</CardTitle>
              <CardDescription small>
                <span role="img" aria-label="Time">⏰</span> Published on {sanitizeDate(poll.published_at)}
              </CardDescription>
            {!voted ?
              <CardDescription>
                <div onChange={event => this.setChoice(event)}>
                  {choices}
                </div>
                <PrimaryButton onClick={this.submitVote} disabled={!currentChoice}>Vote!</PrimaryButton>
              </CardDescription> :
              vote && <p><span role="img" aria-label="Check">✅</span> You voted for {vote.choice}!</p> 
            }
            </Card> : !error && 'Loading...'
          }
          {error && <p>Error! <span role="img" aria-label="No">🙅‍♀️</span>Try a different question.</p>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    poll: state.pollsReducer.poll,
    loaded: state.pollsReducer.loaded,
    error: state.pollsReducer.error,
    vote: state.pollsReducer.vote,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPollDetail: id => dispatch(fetchPollDetail(id)),
  updateVotes: choiceUrl => dispatch(updateVotes(choiceUrl)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionDetail)
);
