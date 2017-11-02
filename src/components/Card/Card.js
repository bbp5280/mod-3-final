import React from 'react';

const Card = ( {name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words}) => {

  return (
    <div>
      <h2>{name}</h2>
      <h3>{founded}</h3>
      <p>{coatOfArms}</p>
      <p>{titles}</p>
      <p>{seats}</p>
      <p>{ancestralWeapons}</p>
      <p>{words}</p>
    </div>
  );
};

export default Card;
