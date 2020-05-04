import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import polls from "../../../utils/tests/polls";
import List from "..";

describe("List", () => {
  it("should render List correctly", () => {
    const component = shallow(
      <BrowserRouter>
        <List items={polls} />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
