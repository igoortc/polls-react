import React from "react";
import { withRouter } from "react-router-dom";
import { Card, CardTitle, CardDescription } from "../Card";
import { PollsList } from "./styled";

export const List = ({ items, history }) => {
  const styledList =
    items && items.map(item => {
      const publishedDate = new Date(item.published_at);
      const date = publishedDate.toLocaleDateString();
      const time = publishedDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})
      return (
        <Card
          small
          hover
          key={item.url}
          onClick={() => {
            history.push(`/poll${item.url}`);
          }}
        >
          <CardTitle small>
            <span role="img" aria-label="Star">⭐️</span>
            {item.question}
          </CardTitle>
          <CardDescription small>
            <span role="img" aria-label="Choices">📋</span>
            {item.choices.length} choices
          </CardDescription>
          <CardDescription small>
            <span role="img" aria-label="Time">⏰</span>
            Published on {date} at {time}
          </CardDescription>
        </Card>
      )
    });
  return <PollsList>{styledList}</PollsList>;
};

export default withRouter(List);
