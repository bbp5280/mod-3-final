import { shallow, configure } from 'enzyme';
import Card from './Card';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Card name='someName'
      founded='someTime'
      seats={['seat', 'seat 2']}
      titles={['title', 'title2']}
      coatOfArms='someCoat'
      ancestralWeapons={['bar']}
      houseWords='word'/>);

    expect(wrapper).toMatchSnapshot();

  });
});
