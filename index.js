
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
  if(obj.clicked === true){
    meal.push(obj);
    mealkey.push(image);
    div.classList.add("ingredient-selected");
    totMeal.calories += obj.calories;
    totMeal.protein += obj.protein;
    totMeal.carbs += obj.carbs;
    totMeal.fat += obj.fat;
    totMeal.price += obj.price;
  } else {
    meal.splice(meal.indexOf(obj),1);
    mealkey.splice(mealkey.indexOf(image),1);
    div.classList.remove("ingredient-selected");
    totMeal.calories -= obj.calories;
    totMeal.protein -= obj.protein;
    totMeal.carbs -= obj.carbs;
    totMeal.fat -= obj.fat;
    totMeal.price -= obj.price;
  }
  document.querySelector(".meal-total").innerHTML = "Calories:" + totMeal.calories + ", Protein:" + totMeal.protein + ", Carbs:" + totMeal.carbs + ", Fat:" + totMeal.fat + ", Price:" + totMeal.price
}
}

document.querySelector(".show-meal").addEventListener("click",function(e){
  $(".selector-section").slideUp( "slow", function(){});
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Protein', 'Carbs', 'Fat'],
        datasets: [{
            label: '# of Votes',
            data: [totMeal.protein,totMeal.carbs,totMeal.fat],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]

        }]
    },
    options: {}
  });

})
