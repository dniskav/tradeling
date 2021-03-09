import Hero from "../index";
import { shallow } from "enzyme";

describe("<Logo />", () => {
  const tree = shallow(<Hero />);
  it("Logo should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
