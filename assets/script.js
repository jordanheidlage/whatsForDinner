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
var ingredients1 = document.querySelector('#one')
var ingredients2 = document.querySelector('#two')
var ingredients3 = document.querySelector('#three')
var ingredients4 = document.querySelector('#four')
var ingredients5 = document.querySelector('#five')
var ingredients6 = document.querySelector('#six')
var ingredients7 = document.querySelector('#seven')
var ingredients8 = document.querySelector('#eight')
var ingredients9 = document.querySelector('#nine')
var ingredients10 = document.querySelector('#ten')
var ingredients11 = document.querySelector('#eleven')
var ingredients12 = document.querySelector('#twelve')
var ingredients13 = document.querySelector('#thirteen')
var ingredients14 = document.querySelector('#fourteem')
var ingredients15 = document.querySelector('#fifteen')
var ingredientsArray = [ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, ingredients11, ingredients12, ingredients13, ingredients14, ingredients15]

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
        ingredients1.textContent = data.drinks[0].strMeasure1 + " " + data.drinks[0].strIngredient1
        ingredients2.textContent = data.drinks[0].strMeasure2 + " " + data.drinks[0].strIngredient2
        ingredients3.textContent = data.drinks[0].strMeasure3 + " " + data.drinks[0].strIngredient3
        ingredients4.textContent = data.drinks[0].strMeasure4 + " " + data.drinks[0].strIngredient4
        ingredients5.textContent = data.drinks[0].strMeasure5 + " " + data.drinks[0].strIngredient5
        ingredients6.textContent = data.drinks[0].strMeasure6 + " " + data.drinks[0].strIngredient6
        ingredients7.textContent = data.drinks[0].strMeasure7 + " " + data.drinks[0].strIngredient7
        ingredients8.textContent = data.drinks[0].strMeasure8 + " " + data.drinks[0].strIngredient8
        ingredients9.textContent = data.drinks[0].strMeasure9 + " " + data.drinks[0].strIngredient9
        ingredients10.textContent = data.drinks[0].strMeasure10 + " " + data.drinks[0].strIngredient10
        ingredients11.textContent = data.drinks[0].strMeasure11 + " " + data.drinks[0].strIngredient11
        ingredients12.textContent = data.drinks[0].strMeasure12 + " " + data.drinks[0].strIngredient12
        ingredients13.textContent = data.drinks[0].strMeasure13 + " " + data.drinks[0].strIngredient13
        // ingredients14.textContent = data.drinks[0].strMeasure14 + " " + data.drinks[0].strIngredient14
        // ingredients15.textContent = data.drinks[0].strMeasure15 + " " + data.drinks[0].strIngredient15
        for (let i = 0; i < ingredientsArray.length; i++) {
            if (!ingredientsArray[i].textContent.includes("null")){
                ingredientsArray[i].classList.remove("hide")
            }else{
                ingredientsArray[i].classList.add("hide")
            }
        }
    });
}

generateButtonEl.addEventListener("click", getFood)
generateButtonEl.addEventListener("click", getDrink)