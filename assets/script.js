var generateButtonEl = document.querySelector('#generate')
var mealEl = document.querySelector('#meal')
var cultureEl = document.querySelector('#culture')
var categoryEl = document.querySelector('#category')
var recipeEl = document.querySelector('#recipe')
var foodImageEl = document.querySelector('#foodImage')
//Drinks
var drinkImageEl = document.querySelector('#drinkImage')
var drinkEl = document.querySelector('#drink')
var drinkCategory = document.querySelector('#drinkCategory')
var alcoholEl = document.querySelector('#alcohol')
var ingredientsListEl = document.querySelector('#ingredientsList')


function getFood(){
    var queryURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    console.log(queryURL);
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        mealEl.textContent = data.meals[0].strMeal
        cultureEl.textContent = data.meals[0].strArea
        categoryEl.textContent = data.meals[0].strCategory
        recipeEl.textContent = "Link to recipe"
        recipeEl.setAttribute("href", data.meals[0].strSource)
        foodImageEl.setAttribute("src", data.meals[0].strMealThumb)
    });
}

function getDrink(){
    var queryURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    console.log(queryURL);
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        drinkEl.textContent = data.drinks[0].strDrink
        drinkCategory.textContent = data.drinks[0].strCategory
        alcoholEl.textContent = data.drinks[0].strAlcoholic
        drinkImageEl.setAttribute("src",data.drinks[0].strDrinkThumb)

    });
}

generateButtonEl.addEventListener("click", getFood)
generateButtonEl.addEventListener("click", getDrink)