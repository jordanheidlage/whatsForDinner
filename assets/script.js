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
var ingredientsArray = [ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, ingredients11, ingredients12, ingredients13]
var localLiArray = [document.querySelector('#localLi1'), document.querySelector('#localLi2'), document.querySelector('#localLi3'), document.querySelector('#localLi4'), document.querySelector('#localLi5'), document.querySelector('#localLi6')]
var localArray = [localStorage.getItem("local1"), localStorage.getItem("local2"), localStorage.getItem("local3"), localStorage.getItem("local4"), localStorage.getItem("local5"), localStorage.getItem("local6")]
var parsed1
var parsed2
var parsed3
var parsed4
var parsed5
var parsed6
var parsedArray = [parsed1, parsed2, parsed3, parsed4, parsed5, parsed6]


function populateHistory(){
    for (let i = 0; i < localArray.length; i++) {
        if (localArray[i] != undefined){
            parsedArray[i] = JSON.parse(localArray[i])
        }
        if (parsedArray[0] != null){
            localLiArray[0].textContent = parsedArray[0].meals[0].strMeal
        }if (parsedArray[1] != null){
            localLiArray[1].textContent = parsedArray[1].drinks[0].strDrink
        }if (parsedArray[2] != null){
            localLiArray[2].textContent = parsedArray[2].meals[0].strMeal
        }if (parsedArray[3] != null){
            localLiArray[3].textContent = parsedArray[3].drinks[0].strDrink
        }if (parsedArray[4] != null){
            localLiArray[4].textContent = parsedArray[4].meals[0].strMeal
        }if (parsedArray[5] != null){
            localLiArray[5].textContent = parsedArray[5].drinks[0].strDrink
        }
    }
}

function getFood(){
    var queryURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if(localStorage.getItem("local1") == null){
            localStorage.setItem("local1", JSON.stringify(data))
        }else if (localStorage.getItem("local3") == null){
            localStorage.setItem("local3", JSON.stringify(data))
        }else if (localStorage.getItem("local5") == null){
            localStorage.setItem("local5", JSON.stringify(data))
        }else{
            localStorage.setItem("local5", localStorage.getItem("local3"))
            localStorage.setItem("local3", localStorage.getItem("local1"))
            localStorage.setItem("local1", JSON.stringify(data))
        }
        console.log(data);
        mealEl.textContent = data.meals[0].strMeal
        cultureEl.textContent = data.meals[0].strArea
        categoryEl.textContent = data.meals[0].strCategory
        localLiArray[4].textContent = localLiArray[2].textContent
        localLiArray[2].textContent = localLiArray[0].textContent
        localLiArray[0].textContent = data.meals[0].strMeal
        recipeEl.textContent = "Link to recipe"
        recipeEl.setAttribute("href", data.meals[0].strSource)
        foodImageEl.setAttribute("src", data.meals[0].strMealThumb)
    });
}

function getDrink(){
    var queryURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        if(localStorage.getItem("local2") == null){
            localStorage.setItem("local2", JSON.stringify(data))
        }else if (localStorage.getItem("local4") == null){
            localStorage.setItem("local4", JSON.stringify(data))
        }else if (localStorage.getItem("local6") == null){
            localStorage.setItem("local6", JSON.stringify(data))
        }else{
            localStorage.setItem("local6", localStorage.getItem("local4"))
            localStorage.setItem("local4", localStorage.getItem("local2"))
            localStorage.setItem("local2", JSON.stringify(data))
        }
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
        localLiArray[5].textContent = localLiArray[3].textContent
        localLiArray[3].textContent = localLiArray[1].textContent
        localLiArray[1].textContent = data.drinks[0].strDrink
        for (let i = 0; i < ingredientsArray.length; i++) {
            if (!ingredientsArray[i].textContent.includes("null")){
                ingredientsArray[i].classList.remove("hide")
            }else{
                ingredientsArray[i].classList.add("hide")
            }
        }
    });
}

populateHistory()

generateButtonEl.addEventListener("click", getFood)
generateButtonEl.addEventListener("click", getDrink)