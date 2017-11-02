import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { storeGOTHouses } from '../../actions';
import { fetchGOTHouses } from './api';
import Card from '../Card/Card';

class App extends Component {

  async componentDidMount(){
    const gotHouses = await fetchGOTHouses();
    this.props.storeGOTHouses(gotHouses);
  }

  buildCards(){
    return  this.props.GOTHouses.map(house =>{
      console.log(house);
      return  <Card name={house.name}
        founded={house.founded}
        seats={house.seats}
        titles={house.titles}
        coatOfArms={house.coatOfArms}
        ancestralWeapons={house.ancestralWeapons}
        words={house.words}
        key={house.name}/>;
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {this.buildCards()}
        </div>
      </div>
    );
  }
}

/* <button onClick={() => {
  this.props.fakeAction();
  alert(this.props.fake);
}}> FAKE ACTION</button> */

App.propTypes = {
  storeGOTHouses: PropTypes.func,
  GOTHouses:PropTypes.array
};

const mapStateToProps = ({ GOTHouses }) => ({ GOTHouses });
const mapDispatchToProps = dispatch => ({ storeGOTHouses:
  (gotHouses) => dispatch(storeGOTHouses(gotHouses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
