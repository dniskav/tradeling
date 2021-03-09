import User from "../User";
import { shallow } from "enzyme";

describe("<Results />", () => {
  const props = {
    avatar_url: '',
    html_url: '',
    location: '',
    url: '',
    name: '',
    language: '',
    stars: '',
    owner: '',
  }
  const tree = shallow(<User {...props}/>);
  it("Search should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});