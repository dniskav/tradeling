import React from "react";
import { shallow } from "enzyme";
import App from "./App";

jest.mock("react-redux");

describe("<App />", () => {
  it('App should match snapshot', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  })
});
