import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';
import Weight from './Weight';

class FoodItem extends PureComponent {

  static propTypes = {
    changeWeight: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render () {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeWeight
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
          { name }
        </span>
        <Weight
          score={score}
          index={index}
          changeWeight={changeWeight}
        />
      </div>
    );
  }
}

export default FoodItem;
