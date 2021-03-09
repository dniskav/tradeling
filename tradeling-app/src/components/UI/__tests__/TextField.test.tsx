import { shallow } from "enzyme";
import TextField from '../TextField';

jest.mock("react-redux", () => {
  return {
    useSelector: () => [],
    useDispatch: () => jest.fn(),
  }
});

describe("<TextField />", () => {
  const tree = shallow(<TextField />);
  it("TextField should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
