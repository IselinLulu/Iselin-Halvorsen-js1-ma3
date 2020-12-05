
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results"); 

/** 
 * Collecting information from API 
*/
async function getHtml() {

    const respons = await fetch(url);

    const results = await respons.json();

    const facts = results.results;

    // Setup for loading-wheel
    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++){
        console.log(facts[i].name);
        console.log(facts[i].rating);
        console.log(facts[i].tags.length);

        if(i === 8){
            break;
        }

        resultsContainer.innerHTML += `<div class="result"> 
        Name: <br> ${facts[i].name} <br> 
        Rating: ${facts[i].rating} <br> 
        tags: ${facts[i].tags.length} </div>`;
    }
    
}

getHtml();