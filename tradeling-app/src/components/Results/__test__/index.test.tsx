import Hero from "../index";
import { shallow } from "enzyme";

jest.mock("react-redux", () => {
  return {
    useSelector: () => [],
    useDispatch: () => jest.fn(),
  }
});

describe("<Results />", () => {
  const tree = shallow(<Hero />);
  it("Results should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
