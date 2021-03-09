import Hero from "../index";
import { shallow } from "enzyme";

describe("<Hero />", () => {
  const tree = shallow(<Hero />);
  it("Hero should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
