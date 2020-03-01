import React from 'react';
import PropTypes from 'prop-types';

import style from './Weight.module.css';

const Weight = ({ index, weight, changeWeight }) => {

  return (
    <div className={style.Weight}>
      <button
        className={[style.WeightAction, style.Decrement].join(' ')}
        onClick={() => changeWeight(index, -10)}> -
      </button>
      <span className={style.WeightAmount}>{ weight + 'g' }</span>
      <button
        className={[style.WeightAction, style.Increment].join(' ')}
        onClick={() => changeWeight(index, +20)}> +
      </button>
    </div>
  );
}

Weight.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeWeight: PropTypes.func
};

export default Weight;
