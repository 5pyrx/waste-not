import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Weight from './Weight';

class FoodItem extends PureComponent {

  static propTypes = {
    changeWeight: PropTypes.func,
    removeFood: PropTypes.func,
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
  };

  render () {
    const {
      name,
      id,
      weight,
      index,
      removeFood,
      changeWeight
    } = this.props;
    return (
      <div className="food">
        <span className="food-name">
          <button className="remove-food" onClick={ () => removeFood(id) }>✖</button>
          { name }
        </span>
        <Weight
          weight={weight}
          index={index}
          changeWeight={changeWeight}
        />
      </div>
    );
  }
}

export default FoodItem;
