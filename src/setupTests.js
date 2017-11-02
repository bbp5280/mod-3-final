import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';


configure({ adapter: new Adapter() });

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};
