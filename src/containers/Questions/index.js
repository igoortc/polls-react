import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPolls } from "../../store/actions/polls";
import List from "../../components/List";

export class Questions extends Component {

  componentDidMount = () => {
    const { fetchPolls } = this.props;
    fetchPolls();
  }

  render() {
    const { polls } = this.props;

    return (
      <div>
        <List items={polls.polls} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    polls: state.polls,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPolls: () => dispatch(fetchPolls()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
