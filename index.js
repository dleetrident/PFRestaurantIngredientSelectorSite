let meal = []
let mealcals = 0
let mealprotein = 0
let mealcarbs = 0
let mealfat = 0
let item = "this is item"
alert(item)
function Ingredient(calories,protein,carbs,fat,price,image){
this.calories = calories;
this.protein = protein;
this.carbs = carbs;
this.fat = fat
this.price = price
this.image = image
let clicked = false
}
Ingredient.prototype.postImage = function(){
document.querySelector(".display-ingredient").src = this.image
}
let chicken = new Ingredient(126,27,0,2,0.50,"images/chicken.png")
let steak = new Ingredient(217,26,0,12,2.00,"images/steak.png")
let lamb = new Ingredient(294,25,0,21,1.00,"images/lamb.png")

let ingredientRange = document.querySelectorAll(".ingredient-img")
for(i=0;i<ingredientRange;i++){
  document.querySelectorAll(".ingredient-img")[i].addEventListener("click",function(){
    item = event.target.id
    let object = chicken
  if(object.clicked = false){
  object.postImage
  object.clicked = true
  meal.push(object)
  } else {
  let index = meal.indexOf(object)
  meal.splice(index,1)

  object.clicked = false
  }
  })
}

for(i=0;i<meal.length;i++){
calories += meal.calories[i];
protein += meal.protein[i];
carbs += meal.carbs[i];
fat += meal.fat[i]
}
