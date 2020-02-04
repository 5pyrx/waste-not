import React, { Component } from 'react';

class GetRecipes extends Component {
  render () {
    const {
      getRecipes
    } = this.props;
    return (
      <div className="center-align">
        <button
          type="button"
          className="get-recipes"
          onClick={ () => getRecipes() }
        >
        Get Recipes
        </button>
      </div>
    );
  }
}

export default GetRecipes;
