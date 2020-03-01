import React from 'react';
import PropTypes from 'prop-types';

import style from './AddFoodForm.module.css';

const AddFoodForm = ({ addFood }) => {

  let playerInput = React.createRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    addFood(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a food item"
      />
      <input
        type="submit"
        value="Add Food"
      />
    </form>
  );
}

AddFoodForm.propTypes = {
  addFood: PropTypes.func
};

export default AddFoodForm;
