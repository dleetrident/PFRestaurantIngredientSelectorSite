const rangeOfIngredients = document.querySelectorAll(".ingredient")
let meal = []
let mealkey = []



function Ingredient(calories,protein,carbs,fat,price){
this.calories = calories;
this.protein = protein;
this.carbs = carbs;
this.fat = fat
this.price = price
let clicked = false
}
//[clicked,calories,protein,carbs,fat,price]
let totMeal = new Ingredient(0,0,0,0,0)
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
    displayImage(imageClicked, e.target);
   })
}

function displayImage(image, div){
let display = document.querySelector(".display-ingredient")

if(ingredients.has(image)){
  display.src = "images/" + image + ".png"
  let obj = ingredients.get(image)
  obj.clicked = !obj.clicked
  obj.clicked === true ? meal.push(obj) && mealkey.push(image) && div.classList.add("ingredient-selected") : meal.splice(meal.indexOf(obj),1) && mealkey.splice(mealkey.indexOf(image),1) && div.classList.remove("ingredient-selected")
}
}

document.querySelector(".calculate-meal").addEventListener("click",function(e){
  for(i=0;i<meal.length;i++){

totMeal.calories += meal[i].calories;
totMeal.protein += meal[i].protein;
totMeal.carbs += meal[i].carbs;
totMeal.fat += meal[i].fat;
totMeal.price += meal[i].price;
}
document.querySelector(".meal-total").innerHTML = "Calories:" + totMeal.calories + ", Protein:" + totMeal.protein + ", Carbs:" + totMeal.carbs + ", Fat:" + totMeal.fat + ", Price:" + totMeal.price
totMeal = {calories: 0,protein: 0,carbs: 0,fat: 0,price:0}
})
