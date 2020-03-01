import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from 'prop-types';
import Weight from '../Weight/Weight';

import style from './FoodItem.module.css';

class FoodItem extends PureComponent {
  state = {
    ubd: new Date()
  };

  handleChange = date => {
      this.setState({
        ubd: date
      });
    };

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
      <div className={style.Food}>
        <span className={style.FoodName}>
          <button className={style.RemoveFood} onClick={ () => removeFood(id) }>✖</button>
          { name }
        </span>
        <DatePicker
          className={style.DatePicker}
          selected={this.state.ubd}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
        />
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
