const rangeOfIngredients = document.querySelectorAll(".ingredient")
const rangeOfSizes = document.querySelectorAll(".size-button")
let meal = []
let mealkey = []
let mealSize = ""
$(".chart-div").hide();
let displayDiv = document.querySelector(".display-div")
let displayImg = document.querySelector(".display-ingredient")

for(i=0;i<rangeOfSizes.length;i++){
  rangeOfSizes[i].addEventListener("click",function(e){
    mealSize = e.target.id
   })
}

function Ingredient(calories,protein,carbs,fat,price,type){
this.calories = calories;
this.protein = protein;
this.carbs = carbs;
this.fat = fat;
this.price = price;
this.type = type;
let clicked = false;
}
//[clicked,calories,protein,carbs,fat,price]
let totMeal = new Ingredient(0,0,0,0,0)
// carbs
let eggnoodlesObj = new Ingredient(330,12,60,4.5,4.5,"carb")
let vermicelliObj = new Ingredient(260,0,65,0,4.5,"carb")
let glassnoodlesObj = new Ingredient(280,0,69.5,1,4.5,"carb")
let brownriceObj = new Ingredient(320,6,66,4,4.5,"carb")
let whitericeObj = new Ingredient(330,6,73,0.5,4.5,"carb")
// sauce
let traditionalObj = new Ingredient(163,0,16,12,0.00,"sauce")
let peanutsauceObj = new Ingredient(174,5,11,12,1,"sauce")
let spicysauceObj = new Ingredient(186,3,17.5,11.5,1.00,"sauce")
let currysauceObj = new Ingredient(200,2,20.6,11.8,1.00,"sauce")
// ingredients
let chickenObj = new Ingredient(126,27,0,2,0.50,"meat")
let steakObj = new Ingredient(217,26,0,12,2.00,"meat")
let lambObj = new Ingredient(294,25,0,21,1.50,"meat")
let baconObj = new Ingredient(270,12.6,0,20.1,0.00,"meat")
let burgerObj = new Ingredient(180,24,0,8,0.50,"meat")
let hamObj = new Ingredient(240,26,2,6,0.50,"meat")
let meatballsObj = new Ingredient(228,13.9,8.5,14.8,0.50,"meat")
let minceObj = new Ingredient(177,35.1,0,2.6,0.50,"meat")
let porkbellyObj = new Ingredient(333,18,0,28,1.50,"meat")
let sausagesObj = new Ingredient(268,27,0,18,0.00,"meat")
let babycornObj = new Ingredient(27,1.3,4.2,0.2,0.20)
let bellpeppersObj = new Ingredient(32,1,7.6,0.2,0.20)
let broccoliObj = new Ingredient(31,2.6,6,0.3,0.20)
let carrotsObj = new Ingredient(27,0.6,6.1,0.15,0.20)
let chillisObj = new Ingredient(18,0.8,4,0.2,0.20)
let cornObj = new Ingredient(66,2,13.9,0.7,0.20)
let kidneybeansObj = new Ingredient(55,3.5,10,0.3,0.20)
let mushroomsObj = new Ingredient(30,3,4.5,0,0.20)
let peasObj = new Ingredient(90,6,15,0,0.20)
let springbeansObj = new Ingredient(27,1.6,3.2,0.4,0.20)
let cashewsObj = new Ingredient(160,5,8,13,1.00)
let friedtofuObj = new Ingredient(175,11,7,13,1.50)
let greenonionObj = new Ingredient(10,1,2,0,0)
let peanutsObj = new Ingredient(161,7.3,4.6,14,1.00)
let sesameseedsObj = new Ingredient(124,3.8,5.1,10.7,0.50)
let tofuObj = new Ingredient(90,12,4,4,1.00)

let smallObj = new Ingredient(0,0,0,0,0,"size")
let mediumObj = new Ingredient(0,0,0,0,0,"size")
let largeObj = new Ingredient(0,0,0,0,0,"size")


const ingredients = new Map()
.set("egg-noodles",eggnoodlesObj)
.set("vermicelli",vermicelliObj)
.set("glass-noodles",glassnoodlesObj)
.set("brown-rice",brownriceObj)
.set("white-rice",whitericeObj)
.set("traditional",traditionalObj)
.set("peanut-sauce",peanutsauceObj)
.set("spicy-sauce",spicysauceObj)
.set("curry-sauce",currysauceObj)
.set("steak",steakObj)
.set("chicken",chickenObj)
.set("lamb",lambObj)
.set("bacon",baconObj)
.set("burger",burgerObj)
.set("ham",hamObj)
.set("meatballs",meatballsObj)
.set("mince",minceObj)
.set("pork-belly",porkbellyObj)
.set("sausages",sausagesObj)
.set("baby-corn",babycornObj)
.set("bell-peppers",bellpeppersObj)
.set("broccoli",broccoliObj)
.set("carrots",carrotsObj)
.set("chillis",chillisObj)
.set("corn",cornObj)
.set("kidney-beans",kidneybeansObj)
.set("mushrooms",mushroomsObj)
.set("peas",peasObj)
.set("spring-beans",springbeansObj)
.set("fried-tofu",friedtofuObj)
.set("green-onion",greenonionObj)
.set("peanuts",peanutsObj)
.set("sesame-seeds",sesameseedsObj)
.set("tofu",tofuObj)
.set("cashews",cashewsObj)
.set("small",smallObj)
.set("medium",mediumObj)
.set("large",largeObj)

for(i=0;i<rangeOfIngredients.length;i++){
  document.querySelectorAll(".ingredient")[i].addEventListener("click",function(e){
    let imageClicked = e.target.id
    displayImage(imageClicked, e.target);
   })
}

for(i=0;i<rangeOfIngredients.length;i++){
  rangeOfIngredients[i].addEventListener("mouseover",function(e){
    let cardOver = document.querySelector(".card")
    let imageOver = e.target.id;
    let objOver = ingredients.get(imageOver);
    let left  = displayDiv.clientX + "px";
    let top  = displayDiv.clientY + "px";
    displayImg.src = "images/" + imageOver + ".png"
    cardOver.style.left = left;
    cardOver.style.top = top;
    document.querySelector(".card-title").innerHTML = imageOver
    document.querySelector(".calories-card").innerHTML = "Calories: " + objOver.calories
    document.querySelector(".protein-card").innerHTML = "Protein: " + objOver.protein
    document.querySelector(".carbs-card").innerHTML = "Carbs: " + objOver.carbs
    document.querySelector(".fat-card").innerHTML = "Fat: " + objOver.fat
    document.querySelector(".price-card").innerHTML = "Price: £" + objOver.price.toFixed(2)
  })
}
$(".meat-div").hide()
$(".carb-div").hide()
$(".sauce-div").hide()
$(".filling-div").hide()

function displayImage(image, div){
let display = document.querySelector(".display-ingredient")

if(ingredients.has(image)){

  let obj = ingredients.get(image)
  obj.clicked = !obj.clicked
  let selectListItem = document.createElement("LI")
  let listText = document.createTextNode(image)
  let removeListItem = document.querySelectorAll(".list-group-item")
  if(obj.type === "size"){
    $(".size-div").slideUp()
    $(".carb-div").fadeIn()
  } else if(obj.type === "carb"){
    $(".carb-div").slideUp()
    $(".sauce-div").fadeIn()
  }  else if(obj.type === "sauce"){
    $(".sauce-div").slideUp()
    $(".meat-div").fadeIn()
    $('.display-div').fadeIn(1500)
    $('.list-group').fadeIn(1500)
    $('.display-div').removeClass("hide-div")
    $('.list-group').removeClass("hide-div")
  } else if(obj.type === "meat"){
    $(".meat-div").slideUp()
    $(".filling-div").fadeIn()
  }
  if(obj.clicked === true){
    meal.push(obj);
    mealkey.push(image);
    div.classList.add("ingredient-selected");
    selectListItem.appendChild(listText);
    document.querySelector(".list-group").appendChild(selectListItem).classList.add("list-group-item")
    totMeal.calories += obj.calories;
    totMeal.protein += obj.protein;
    totMeal.carbs += obj.carbs;
    totMeal.fat += obj.fat;
    totMeal.price += obj.price;
} else{
     $( "li:contains(" + image + ")" ).remove()
    meal.splice(meal.indexOf(obj),1);
    mealkey.splice(mealkey.indexOf(image),1);
    div.classList.remove("ingredient-selected");
    totMeal.calories -= obj.calories;
    totMeal.protein -= obj.protein;
    totMeal.carbs -= obj.carbs;
    totMeal.fat -= obj.fat;
    totMeal.price -= obj.price;
}
}

}



  document.querySelector(".show-meal").addEventListener("click",function(e){
    if(meal.length < 10){
      $(".ingredient-div").slideUp(1000);

      $(".chart-div").fadeIn(1000);

      displayImg.src = "images/wok.png"
  if(mealSize === "large"){
    totMeal.calories *= 1.3;
    totMeal.protein *= 1.3;
    totMeal.carbs *= 1.3;
    totMeal.fat *= 1.3;
    totMeal.price += 1.5;
  } else if(mealSize === "small"){
    totMeal.calories /= 1.3;
    totMeal.protein /= 1.3;
    totMeal.carbs /= 1.3;
    totMeal.fat /= 1.3;
    totMeal.price -= 1.5;
  }
      document.querySelector(".card-title").innerHTML = "Meal Total"
      document.querySelector(".calories-card").innerHTML = "Calories: " + Math.round(totMeal.calories)
      document.querySelector(".protein-card").innerHTML = "Protein: " + Math.round(totMeal.protein)
      document.querySelector(".carbs-card").innerHTML = "Carbs: " + Math.round(totMeal.carbs)
      document.querySelector(".fat-card").innerHTML = "Fat: " + Math.round(totMeal.fat)
      document.querySelector(".price-card").innerHTML = "Price: £" + totMeal.price.toFixed(2)
      document.querySelector(".final-price").innerHTML = "Meal Price: £" + totMeal.price.toFixed(2)
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
      })

    } else {
      document.querySelector(".meal-cap").innerHTML = "Please choose from 5 delicious and nutritious vegetable and topping options"
    }
    })


document.onload = $('.selector-section').fadeIn(1500)
