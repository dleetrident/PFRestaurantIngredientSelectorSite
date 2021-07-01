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

const ingredients = new Map()
.set("lamb",lambObj)
.set("steak",steakObj)
.set("chicken",chickenObj)

for(i=0;i<rangeOfIngredients.length;i++){
  document.querySelectorAll(".ingredient")[i].addEventListener("click",function(e){
    let imageClicked = e.target.id
    displayImage(imageClicked);
   })
}

function displayImage(image){
let display = document.querySelector(".display-ingredient")
if(ingredients.has(image)){
  display.src = "images/" + image + ".png"
  let obj = ingredients.get(image)
  obj.clicked = !obj.clicked
  obj.clicked === true ? meal.push(obj) : meal.splice(meal.indexOf(obj),1)
}
}

document.querySelector("calculate-meal").addEventListener("click",function(){
  for(i=0;i<meal.length;i++){

  }
})
