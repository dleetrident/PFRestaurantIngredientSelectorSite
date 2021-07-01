const rangeOfIngredients = document.querySelectorAll(".ingredient")
let meal = []


function Ingredient(calories,protein,carbs,fat,price){
this.calories = calories;
this.protein = protein;
this.carbs = carbs;
this.fat = fat
this.price = price
let clicked = false
}
//[clicked,calories,protein,carbs,fat,price]
let chickenObj = new Ingredient(126,27,0,2,0.50)
let steakObj = new Ingredient(217,26,0,12,2.00)
let lambObj = new Ingredient(294,25,0,21,1.00)

for(i=0;i<rangeOfIngredients.length;i++){
  document.querySelectorAll(".ingredient")[i].addEventListener("click",function(e){
    let imageClicked = e.target.id
    displayImage(imageClicked);

    })
}

function displayImage(image){
let display = document.querySelector(".display-ingredient")
switch(image){
  case "lamb":
  display.src = "images/" + image + ".png";
  lambObj.clicked = !lambObj.clicked
  lambObj.clicked === true ? meal.push(lambObj) : meal.splice(meal.indexOf(lambObj),1)
  break;
  case "steak":
  display.src = "images/" + image + ".png";
  steakObj.clicked = !steakObj.clicked
  steakObj.clicked === true ? meal.push(steakObj) : meal.splice(meal.indexOf(steakObj),1)
  break;
  case "chicken":
  display.src = "images/" + image + ".png";
  chickenObj.clicked = !chickenObj.clicked
  chickenObj.clicked === true ? meal.push(chickenObj) : meal.splice(meal.indexOf(chickenObj),1)
  break;
}
}
