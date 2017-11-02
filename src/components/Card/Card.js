import React from 'react';
import PropTypes from 'prop-types';

const Card = ( {name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  houseWords}) => {

  const buildListItems = (houseFeatures, title) => {
    return houseFeatures.map(feature =>{
      return <li key={feature}> {title}: {feature}</li>;
    });
  };

  const checkForValue = (houseFeature) => {
    return  houseFeature === '' ? 'NA': houseFeature;
  };

  return (
    <div className='card'>
      <div className='inner-card'>
        <h2>{name}</h2>
        <h3>Founded: {checkForValue(founded)}</h3>
        <ul>
          {buildListItems(seats, 'Seats')}
        </ul>
        <ul>
          {buildListItems(titles, 'Titles')}
        </ul>
        <p>Coat Of Arms: {coatOfArms}</p>
        <ul>
          {buildListItems(ancestralWeapons, 'Ancestral Weapons')}
        </ul>
        <p>Words: {checkForValue(houseWords)}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.array,
  houseWords: PropTypes.string
};

export default Card;
