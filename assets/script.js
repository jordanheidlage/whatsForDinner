var generateButtonEl = document.querySelector('#generateButton')

function getFood(){
    var queryURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    console.log(queryURL);
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
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
    });
}

getFood()
getDrink()