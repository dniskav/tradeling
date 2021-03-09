import { shallow } from "enzyme";
import DropDown from '../DropDown';

jest.mock("react-redux", () => {
  return {
    useSelector: () => [],
    useDispatch: () => jest.fn(),
  }
});

describe("<DropDown />", () => {
  const tree = shallow(<DropDown />);
  it("DropDown should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});