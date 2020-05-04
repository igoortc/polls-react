import React from "react";
import { withRouter } from "react-router-dom";
import { PollsList } from "./styled";

export const List = ({ items, history }) => {
  const sanitizedList =
    items && items.map(item => (
      <div
        key={item.url}
        onClick={() => {
          history.push(`/poll${item.url}`);
        }}
      >
        <p>Question: {item.question}</p>
        <p>{item.choices.length} choices</p>
      </div>
    ));
  return <PollsList>{sanitizedList}</PollsList>;
};

export default withRouter(List);
