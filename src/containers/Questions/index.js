import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPolls } from "../../store/actions/polls";

import { PrimaryButton } from "../../components/Button";
import { CleanLink } from "../../components/CleanLink";
import List from "../../components/List";
import { Title } from "../../components/Title";

export class Questions extends Component {

  componentDidMount = () => {
    const { fetchPolls } = this.props;
    fetchPolls();
  }

  render() {
    const { polls, loaded } = this.props;

    return (
      <>
        <Title>Questions App! <span role="img" aria-label="Boom!">💥</span></Title>
        <CleanLink to="/new">
          <PrimaryButton><span role="img" aria-label="Sparkles">✨</span> Create new poll!</PrimaryButton>
        </CleanLink>
        {loaded ? <List items={polls} /> : 'Loading...'}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    polls: state.pollsReducer.polls,
    loaded: state.pollsReducer.loaded
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPolls: () => dispatch(fetchPolls()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
