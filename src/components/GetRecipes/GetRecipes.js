import React, { Component } from 'react';

import style from './GetRecipes.module.css';

class GetRecipes extends Component {
  render () {
    const {
      getRecipes
    } = this.props;
    return (
      <div className="center-align">
        <button
          type="button"
          className={style.GetRecipes}
          onClick={ () => getRecipes() }
        >
        Get Recipes
        </button>
      </div>
    );
  }
}

export default GetRecipes;
