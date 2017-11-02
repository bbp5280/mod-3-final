import React from 'react';

const Card = ( {name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words}) => {

  const buildListItems = (houseFeatures) => {
    return houseFeatures.map(feature =>{
      return <li key={feature}>{feature}</li>;
    });
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>Founded: {founded}</h3>
      <ul>
        <p>Seats: {seats}</p>
        {buildListItems(seats)}
      </ul>
      <p>Titles: {titles}</p>
      <p>Coat Of Arms: {coatOfArms}</p>
      <ul>
        <p>Ancestral Wepons: </p>
        {buildListItems(ancestralWeapons)}
      </ul>
      <p>Words: {words}</p>
    </div>
  );
};

export default Card;
