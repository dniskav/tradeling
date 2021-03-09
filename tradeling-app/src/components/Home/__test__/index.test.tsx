import Hero from "../index";
import { shallow } from "enzyme";

jest.mock("react-redux", () => {
  return {
    useSelector: () => [],
    useDispatch: () => jest.fn(),
  }
});

describe("<Home />", () => {
  const tree = shallow(<Hero />);
  it("Home should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
