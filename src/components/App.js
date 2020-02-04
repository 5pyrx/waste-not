import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header';
import FoodItem from './FoodItem';
import AddFoodForm from './AddFoodForm';
import GetRecipes from './GetRecipes';
// import Recipes from './Recipes';

class App extends Component {
  state = {
    myRecipes:[{}],
    foodItems: [
      {
        name: "Tomatoes",
        weight: 0,
        id: 1
      },
      {
        name: "Beef",
        weight: 0,
        id: 2
      },
      {
        name: "Spaghetti",
        weight: 0,
        id: 3
      },
      {
        name: "Celery",
        weight: 0,
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
    console.log("It's not working yet...")
    var myFood = this.state.foodItems.map ( p => p.name); //creating an array of food names
    console.log(myFood);
    var ingredients = "";
    var endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
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
    for (var i=0; i<myFood.length; i++) { // looping through the myFood array to generate the ingredients param for the api
      ingredients += URLify(myFood[i]) + "%2C"
      console.log(ingredients);
    }
    var params = {
      ingredients: ingredients, //A comma-separated list of ingredients that the recipes should contain.
      number: "10", //The maximal number of recipes to return (default = 5).
      ranking: "2", //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
    }
    var url = endpoint + formatParams(params)
    console.log(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var response = xhttp.responseText;
        console.log("ok");
        response = JSON.parse(response);
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
        <div className = "kitchenpantry">
          <Header
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
      </Provider>
    );
  }
}

export default App;
