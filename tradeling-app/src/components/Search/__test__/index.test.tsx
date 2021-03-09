import Search from "../index";
import { shallow } from "enzyme";

jest.mock("react-redux", () => {
  return {
    useSelector: () => [],
    useDispatch: () => jest.fn(),
  }
});

describe("<Results />", () => {
  const tree = shallow(<Search />);
  it("Search should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
