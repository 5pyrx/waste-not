import React, { Component } from 'react';
import { Provider } from '../../Context';

import style from './KitchenPantry.module.css';

import PantryHeader from '../../components/PantryHeader/PantryHeader';
import FoodItem from '../../components/FoodItem/FoodItem';
import AddFoodForm from '../../components/AddFoodForm/AddFoodForm';
import GetRecipes from '../../components/GetRecipes/GetRecipes';
// import Recipes from './Recipes';

class KitchenPantry extends Component {
  state = {
    myRecipes:[{}],
    foodItems: [
      {
        name: "Tomatoes",
        weight: 0,
        ubd: "",
        id: 1
      },
      {
        name: "Beef",
        weight: 0,
        ubd: "",
        id: 2
      },
      {
        name: "Spaghetti",
        weight: 0,
        ubd: "",
        id: 3
      },
      {
        name: "Celery",
        weight: 0,
        ubd: "",
        id: 4
      }
    ]
  };

  prevFoodItems = 4;

  handleWeightChange = (index, delta) => {
    this.setState( prevState => ({
        weight: prevState.foodItems[index].weight += delta
    }));
  }

  // handleRecipeResponse = (response) => {
  //   this.setState(prevState => {
  //       return {
  //         myRecipes : response
  //       };
  //     });
  //   }

  getRecipes = () => {
    let myFood = this.state.foodItems.map ( p => p.name); //creating an array of food names
    let ingredients = "";
    let endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
    function formatParams(params) { // setting API parameters
      return "?" + Object
        .keys(params)
        .map(function(key){
          return key + "=" + params[key]
        })
        .join("&")
    }
    function URLify(string) {
      return string.trim().replace(/\s/g, '%20');
    }
    for (let i=0; i<myFood.length; i++) { // looping through the myFood array to generate the ingredients param for the api
      ingredients += URLify(myFood[i]) + "%2C"
      console.log(ingredients);
    }
    let params = {
      ingredients: ingredients, //A comma-separated list of ingredients that the recipes should contain.
      number: "10", //The maximal number of recipes to return (default = 5).
      ranking: "2", //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
    }
    let url = endpoint + formatParams(params)
    console.log(url);
    let xhttp = new XMLHttpRequest();
    let response = [];
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        response = xhttp.responseText;
        response = JSON.parse(response);
        console.log("ok");
        console.log(response.length);
        console.log(response);
      }
    };
    xhttp.open("GET", url, true, "jonathanmspencer@gmail.com", "Fishies1");
    xhttp.setRequestHeader("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
    xhttp.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    xhttp.send();
  }

  handleAddFood = (name) => {
    console.log(...this.state.foodItems);
    this.setState(prevState => {
      return {
        foodItems : [
          ...prevState.foodItems,
          {
            name,
            weight: 0,
            id: this.prevFoodItems += 1
          }
        ]
      };
    });
  }

  handleRemoveFood = (id) => {
    this.setState( prevState => {
      return {
        foodItems: this.state.foodItems.filter( p => p.id !== id )
      };
    });
  }

  render () {
    return (
      <Provider value={this.state.foodItems}>
        <div className={style.KitchenPantry}>
          <PantryHeader
            foodItems={ this.state.foodItems } />
          {/* Food list */}
          {this.state.foodItems.map( (food, index) =>
            <FoodItem
              name={ food.name }
              weight={ food.weight }
              id={ food.id }
              key={ food.id.toString() }
              index={index}
              changeWeight={ this.handleWeightChange }
              removeFood={ this.handleRemoveFood }
            />
          )}
          <AddFoodForm addFood={ this.handleAddFood }/>
          <GetRecipes getRecipes={ this.getRecipes }/>
        </div>
        <div className={style.Spacer}></div>
      </Provider>
    );
  }
}

export default KitchenPantry;
