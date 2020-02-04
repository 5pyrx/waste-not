import React from 'react';
import PropTypes from 'prop-types';

const Weight = ({ index, score, changeWeight }) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeWeight(index, -50)}> - </button>
      <span className="counter-score">{ score + 'g' }</span>
      <button className="counter-action increment" onClick={() => changeWeight(index, +50)}> + </button>
    </div>
  );
}

Weight.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeWeight: PropTypes.func
};

export default Weight;
