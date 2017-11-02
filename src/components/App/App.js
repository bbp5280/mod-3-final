import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { storeGOTHouses } from '../../actions';
import { fetchGOTHouses } from './api';

class App extends Component {

  async componentDidMount(){
    const gotHouses = await fetchGOTHouses()
    console.log(gotHouses);
    this.props.storeGOTHouses(gotHouses);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
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
  storeGOTHouses: PropTypes.func
};

const mapStateToProps = ({ GOTHouses }) => ({ GOTHouses });
const mapDispatchToProps = dispatch => ({ storeGOTHouses:
  (gotHouses) => dispatch(storeGOTHouses(gotHouses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
