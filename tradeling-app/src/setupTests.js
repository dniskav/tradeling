import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: { changeLanguage: jest.fn() },
  }),
}));

