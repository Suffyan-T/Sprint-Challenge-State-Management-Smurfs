import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchsmurfs } from '../actions';
import SmurfCard from './SmurfCard';

//destructure instead of using props
const SmurfList = ({fetchsmurfs, smurfs, error, isFetching}) => {
  useEffect(() => {
    fetchsmurfs();
  }, [fetchsmurfs]);

  if (isFetching) {
    return <h2>Your Smurfs are loading</h2>;
  }
  return (
    <div>
      {/* if there is an error, return error message */}
      {error && <p>{error}</p>}
      {/* if smurfs were null, would need to do {smurfs && smurfs.length} then map */}
      {smurfs.map(smurf => (
        <SmurfCard smurf={smurf} />
      ))}
    </div>
  );
};

//give all properties to handle any state
//we need state.smurf - to populate our data
//isFetching
//error
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchsmurfs }
)(SmurfList);