import Repo from "../Repo";
import { shallow } from "enzyme";

describe("<Results />", () => {
  const props = {
    url: '', 
    name: '',
    language: 'en',
    stars: '5', 
    owner: 'me'
  }
  const tree = shallow(<Repo {...props}/>);
  it("Search should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
