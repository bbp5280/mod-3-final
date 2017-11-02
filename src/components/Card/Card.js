import React from 'react';

const Card = ( {name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words}) => {

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
        <p>Words: {checkForValue(words)}</p>
      </div>
    </div>
  );
};

export default Card;
