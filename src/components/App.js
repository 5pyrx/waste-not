import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header';
import FoodItem from './FoodItem';
import AddFoodForm from './AddFoodForm';
import GetRecipes from './GetRecipes';

class App extends Component {
  state = {
    foodItems: [
      {
        name: "Tinned tomatoes",
        score: 0,
        id: 1
      },
      {
        name: "Beef",
        score: 0,
        id: 2
      },
      {
        name: "Spaghetti",
        score: 0,
        id: 3
      },
      {
        name: "Celery",
        score: 0,
        id: 4
      }
    ]
  };

  // player id Counter
  prevPlayerId = 4;

  handleWeightChange = (index, delta) => {
    this.setState( prevState => ({
        score: prevState.foodItems[index].score += delta
    }));
  }

  getRecipes = (name) => {

    console.log("It's not working yet...")
    var myFood = this.state.foodItems.map ( p => p.name); //creating an array of food names
    console.log(myFood);
    var ingredients = "";
    var recipeTitles = "";
    var recipeIds = "";



    console.log(ingredients);

    var endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
    function formatParams(params) { // setting API parameters
      return "?" + Object
        .keys(params)
        .map(function(key){
          return key + "=" + params[key]
        })
        .join("&")
    }
    for (var i=0; i<myFood.length; i++) { // looping through the myFood array to generate the ingredients param for the api
      ingredients += myFood[i] + "%2C"
    }

    var params = {
      ingredients: ingredients, //A comma-separated list of ingredients that the recipes should contain.
      number: "10", //The maximal number of recipes to return (default = 5).
      ranking: "2", //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
    }

    var url = endpoint + formatParams(params)
    console.log(url);
    myFood = JSON.parse(localStorage.getItem("myFood"));
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // document is ready
            var response = xhttp.responseText;
            console.log("ok"+response);
            response = JSON.parse(response);
            console.log(response.length);
            // for (var i=0; i<response.length; i++) { //pulling out response titles
            //   recipeTitles +=
            //   "<tr>" +
            //       "<td>" + (response[i].title) + "</td>" +
            //       "<td>" + (response[i].missedIngredientCount) + "</td>" +
            //       "<td>" + "<img src=" + (response[i].image) + " onclick=recipeDetail();" + ">"  + "</td>" +
            //       "<td>" + (response[i].id) + "</td>" +
            //   "</tr>"
            //   document.getElementById("recipeOptions").innerHTML = recipeTitles;
            //   recipeIds.push((response[i].id))
            // }
            // printing recipe IDs to console
            console.log(recipeIds);
        }
    };
    xhttp.open("GET", url, true, "jonathanmspencer@gmail.com", "Fishies1");
    xhttp.setRequestHeader("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
    xhttp.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    xhttp.send();
  }

  getHighScore = () => {
    const scores = this.state.foodItems.map( p => p.score);
    const highScore = Math.max(...scores);
    console.log('high score = ' + highScore);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  handleAddFood = (name) => {
    console.log(...this.state.foodItems);
    this.setState(prevState => {
      return {
        foodItems : [
          ...prevState.foodItems,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        foodItems: this.state.foodItems.filter( p => p.id !== id )
      };
    });
  }

  render () {
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.foodItems}>
        <div className = "scoreboard">
          <Header
            foodItems={ this.state.foodItems } />
          {/* Players list */}
          {this.state.foodItems.map( (player, index) =>
            <FoodItem
              name={ player.name }
              score={ player.score }
              id={ player.id }
              key={ player.id.toString() }
              index={index}
              changeWeight={ this.handleWeightChange }
              removePlayer={ this.handleRemovePlayer }
              isHighScore={highScore === player.score}
            />
          )}
          <AddFoodForm addFood={this.handleAddFood}/>
          <GetRecipes getRecipes={ this.getRecipes }/>
        </div>
      </Provider>
    );
  }
}

export default App;
