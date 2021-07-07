
const rangeOfIngredients = document.querySelectorAll(".ingredient")
let meal = []
let mealkey = []
$(".chart-div").hide();
let displayDiv = document.querySelector(".display-div")
let displayImg = document.querySelector(".display-ingredient")



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
let chickenObj = new Ingredient(126,27,0,2,2.00)
let steakObj = new Ingredient(217,26,0,12,3.50)
let lambObj = new Ingredient(294,25,0,21,3.00)
let baconObj = new Ingredient(270,12.6,0,20.1,1.50)
let burgerObj = new Ingredient(180,24,0,8,2.00)
let hamObj = new Ingredient(240,26,2,6,2.00)
let meatballsObj = new Ingredient(228,13.9,8.5,14.8,2.00)
let minceObj = new Ingredient(177,35.1,0,2.6,2.00)
let porkbellyObj = new Ingredient(333,18,0,28,3.00)
let sausagesObj = new Ingredient(268,27,0,18,1.50)
let babycornObj = new Ingredient(27,1.3,4.2,0.2,0.50)
let bellpeppersObj = new Ingredient(32,1,7.6,0.2,0.50)
let broccoliObj = new Ingredient(31,2.6,6,0.3,0.50)
let carrotsObj = new Ingredient(27,0.6,6.1,0.15,0.50)
let chillisObj = new Ingredient(18,0.8,4,0.2,0.50)
let cornObj = new Ingredient(66,2,13.9,0.7,0.50)
let kidneybeansObj = new Ingredient(55,3.5,10,0.3,0.50)
let mushroomsObj = new Ingredient(30,3,4.5,0,0.50)
let peasObj = new Ingredient(90,6,15,0,0.50)
let springbeansObj = new Ingredient(27,1.6,3.2,0.4,0.50)
let cashewsObj = new Ingredient(160,5,8,13,1.00)
let friedtofuObj = new Ingredient(175,11,7,13,1.50)
let greenonionObj = new Ingredient(10,1,2,0,0)
let peanutsObj = new Ingredient(161,7.3,4.6,14,1.00)
let sesameseedsObj = new Ingredient(124,3.8,5.1,10.7,0.50)
let tofuObj = new Ingredient(90,12,4,4,1.00)


const ingredients = new Map()
.set("lamb",lambObj)
.set("steak",steakObj)
.set("chicken",chickenObj)
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
    document.querySelector(".price-card").innerHTML = "Price: " + objOver.price
  })
}


function displayImage(image, div){
let display = document.querySelector(".display-ingredient")

if(ingredients.has(image)){

  let obj = ingredients.get(image)
  obj.clicked = !obj.clicked
  let selectListItem = document.createElement("LI")
  let listText = document.createTextNode(image)
  let removeListItem = document.querySelectorAll(".list-group-item")
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
  } else {
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
  document.querySelector(".meal-total").innerHTML = "Calories:" + totMeal.calories + ", Protein:" + totMeal.protein + ", Carbs:" + totMeal.carbs + ", Fat:" + totMeal.fat + ", Price:" + totMeal.price
}
}

document.querySelector(".show-meal").addEventListener("click",function(e){
    $(".ingredient-div").slideUp(1000);

    $(".chart-div").fadeIn(1000);

      displayImg.src = "images/wok.png"

    document.querySelector(".card-title").innerHTML = "Meal Total"
    document.querySelector(".calories-card").innerHTML = "Calories: " + totMeal.calories
    document.querySelector(".protein-card").innerHTML = "Protein: " + totMeal.protein
    document.querySelector(".carbs-card").innerHTML = "Carbs: " + totMeal.carbs
    document.querySelector(".fat-card").innerHTML = "Fat: " + totMeal.fat
    document.querySelector(".price-card").innerHTML = "Price: " + totMeal.price
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
})
document.querySelector(".hide-meal").addEventListener("click",function(e){
    $(".ingredient-div").delay(1000).slideDown(1000);

    $(".chart-div").fadeOut(1000);
    })


document.onload = $('.selector-section').fadeIn(1500)
document.onload = $(".navbar-nav").fadeIn(1500)
document.onload.removeClass("hide-div")



  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('.display-div').fadeIn(1500)
      $('.list-group').fadeIn(1500)
      $('.display-div').removeClass("hide-div")
      $('.list-group').removeClass("hide-div")
      $('.chart-div').removeClass("hide-div")

    } else{
      $('.display-div').fadeOut()
      $('.list-group').fadeOut()
    }
  });
