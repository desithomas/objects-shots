//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//fetch api results via URL
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

// //JS will then promise that it is going to have a response 
// .then(res => res.json())
// .then(data => {
//     console.log(data.drinks[0], data.drinks.strDrinkThumb)
//     //console.log(data.drinks.strDrinksThumb)


//     document.querySelector('img'.src = data.drinks[0].strDrinkThumb)
// })
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){

    const inputVal = document.querySelector('input').value

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`

    fetch(url) 
        .then(res => res.json()) //parses into JSON
        .then(data => {
            // console.log(data.drinks[0])
            // console.log(data.drinks[0].strDrink)
            // console.log(data.drinks[0].strDrinkThumb)
            // console.log(data.drinks[0].strInstructions)

            console.log(data)

            const {strDrink, strDrinkThumb, strInstructions} = data.drinks[0] //destructuring; JS interpreter will auto know what you are trying to do
            console.log(strDrink, strDrinkThumb, strInstructions)
            
    })


}
//* 
// scope controls the timing; root vs. inside

//Async or event based programming; sequential 

//SLA service level agreement

//graceful failing




//command shift enter - duplicates the line you are on 


//you need to attach yours to the 
///document.querySelector('h2').textContent = data.drinks[0].strDrink; 

//avoid creating variables unnecessarily; bloating memory and such; learn the best practices for the programming language you are using 

//avoid sycnchronously calling apis. use the response for multiple apis

