import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { storeGOTHouses } from '../../actions';
import { fetchGOTHouses, swornMember } from './api';
import Card from '../Card/Card';

class App extends Component {

  async componentDidMount(){
    const gotHouses = await fetchGOTHouses();
    this.props.storeGOTHouses(gotHouses);
    this.swornHouseMembers();

  }

  swornHouseMembers (){
    this.props.GOTHouses.map(house => {
      house.swornMembers.map(async member => {
        const members = await  swornMember(member);
        console.log(members);
      });
    });
  }

  loadingGif(){
    return this.props.GOTHouses.length === 0
      ? <img id='wolf' src='/wolf.gif' alt='gif of wolf running' />
      : this.buildCards();
  }

  buildCards(){
    return  this.props.GOTHouses.map(house =>{
      return  <Card name={house.name}
        founded={house.founded}
        seats={house.seats}
        titles={house.titles}
        coatOfArms={house.coatOfArms}
        ancestralWeapons={house.ancestralWeapons}
        houseWords={house.words}
        key={house.name}/>;
    });
  }

  render() {
    console.log(this.props.GOTHouses);
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info Container'>
          {this.loadingGif()}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  storeGOTHouses: PropTypes.func,
  GOTHouses:PropTypes.array
};

const mapStateToProps = ({ GOTHouses }) => ({ GOTHouses });
const mapDispatchToProps = dispatch => ({ storeGOTHouses:
  (gotHouses) => dispatch(storeGOTHouses(gotHouses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
