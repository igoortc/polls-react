import React, { Component } from "react";
import { connect } from "react-redux";
import { newPoll } from "../../store/actions/polls";

import { PrimaryButton, SmallButton } from "../../components/Button";
import { Card } from "../../components/Card";
import { CleanLink } from "../../components/CleanLink";
import { FormSection, FormSectionTitle } from "../../components/Form";
import { Title } from "../../components/Title";

export class NewQuestion extends Component {
  state = {
    question: "",
    choices: [],
    submitted: false,
  };
  
  createNewField = () => {
    const { choices } = this.state;
    return choices.map((choice, index) => 
      <div key={index}>
        <input type="text" value={choice || ''} onChange={event => this.handleChoiceChange(index, event)} />
        <SmallButton
          type="button"
          inline
          transparent
          onClick={() => this.handleRemoveChoice(index)}>
            <span role="img" aria-label="Remove choice" alt="Remove choice">❌</span>
        </SmallButton>
      </div>
    )
  }
  
  handleChoiceChange = (index, event) => {
     let choices = [...this.state.choices];
     choices[index] = event.target.value;
     this.setState({ choices });
  }

  handleQuestionChange = (event) => {
    this.setState({question: event.target.value});
  }
  
  handleNewChoice = () => {
    this.setState(prevState => ({ choices: [...prevState.choices, '']}))
  }
  
  handleRemoveChoice = (i) => {
     let choices = [...this.state.choices];
     choices.splice(i, 1);
     this.setState({ choices });
  }
  
  handleSubmit = (event) => {
    const { question, choices } = this.state;
    const { newPoll } = this.props;

    if (choices.length < 2) alert('Please include at least two options!')
    else {
      newPoll({ question, choices });
      this.setState({
        submitted: true,
      })
      event.preventDefault();
    }
  }

  render() {
    const { question, submitted } = this.state;
    const { poll } = this.props;

    return (
      <>
        <Title>
          <CleanLink to="/">
            <span role="img" aria-label="Go back home!" alt="Go back home!">⬅️</span> Questions App!
          </CleanLink>
        </Title>
        <Title>Create new poll</Title>
        <Card>
          {!submitted ? 
            <form>
              <FormSection>
                <FormSectionTitle>Question</FormSectionTitle>
                <input type="text" value={question} onChange={this.handleQuestionChange} />
              </FormSection>
              <FormSection>
                <FormSectionTitle>Choices</FormSectionTitle>
                {this.createNewField()}
                <SmallButton
                  type="button"
                  margin="5px 0"
                  onClick={this.handleNewChoice}>
                    <span role="img" aria-label="Link">🔗</span> Create new choice
                </SmallButton>
              </FormSection>
              <PrimaryButton
                type="button"
                onClick={this.handleSubmit}>
              <span role="img" aria-label="Sparkles">✨</span> Submit poll
              </PrimaryButton>
            </form> :
            <p>
              Poll submitted! <span role="img" aria-label="Hearts">😍</span>
              {poll &&
                <CleanLink
                  decorate="true"
                  dark="true"
                  to={poll.url}>
                    Check it out.
                </CleanLink>}
            </p>
          }
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    poll: state.pollsReducer.poll,
  };
};

const mapDispatchToProps = dispatch => ({
  newPoll: poll => dispatch(newPoll(poll)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);
