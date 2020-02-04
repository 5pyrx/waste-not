import React from 'react';
import PropTypes from 'prop-types';

const Weight = ({ index, weight, changeWeight }) => {

  return (
    <div className="weight">
      <button className="weight-action decrement" onClick={() => changeWeight(index, -10)}> - </button>
      <span className="weight-amount">{ weight + 'g' }</span>
      <button className="weight-action increment" onClick={() => changeWeight(index, +20)}> + </button>
    </div>
  );
}

Weight.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeWeight: PropTypes.func
};

export default Weight;
