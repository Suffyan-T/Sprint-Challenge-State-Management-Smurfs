import React from 'react';

//props passed from Village
const SmurfCard = ({smurf}) => {
  //console.log(`Smurf props`, props)
  return (
  <div>
  <p>Name: {smurf.name}</p>
  <p>Age: {smurf.age}</p>
  <p>Height: {smurf.height}</p>
  </div>
  )
};

export default SmurfCard;