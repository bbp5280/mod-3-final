import configureStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';
import App from './App';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      GOTHouses:[{name:'someHouse'}]
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<App
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});
