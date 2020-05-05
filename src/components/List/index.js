import React from "react";
import { withRouter } from "react-router-dom";
import { sanitizeDate } from "../../utils/date"
import { Card, CardTitle, CardDescription } from "../Card";
import { PollsList } from "./styled";

export const List = ({ items, history }) => {
  const styledList =
    items && items.map(item => {
      return (
        <Card
          small
          hover
          cursor="pointer"
          key={item.url}
          onClick={() => {
            history.push(`${item.url}`);
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
            Published on {sanitizeDate(item.published_at)}
          </CardDescription>
        </Card>
      )
    });
  return <PollsList>{styledList}</PollsList>;
};

export default withRouter(List);
