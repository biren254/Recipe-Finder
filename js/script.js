const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".row");
const container = document.querySelector(".container");
let searchQuery = "";
// const APP_ID = "f734738d";
// const APP_KEY = "9d9162fc5933b67c9710dac80f4b482c";


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    console.log(searchQuery);
    fetchAPI();
});

async function fetchAPI() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '765bec8ce4mshc798db85a186d50p160b0ejsn5dab3bd10b9f',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${searchQuery}&from=0&to=30`, options)
        .then(response => response.json())
        .then((data) =>{
            console.log(data);
            generateHTML(data.hits);  
        })
        .catch((err) => {
            console.error(err);
        });

  
};

function generateHTML(results) {
    container.classList.remove('hidden');
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += `
            <div class="col-md-4 mt-3">
               <div class="card bg-dark border-4" style="width: 18rem;">
                    <img src="${result.recipe.image}" class="card-img-top" alt="...">
                     <div class="card-body text-center">
                       <h5 class="card-title text-white Dangrek">${result.recipe.label}</h5>
                       <p class="card-text text-white Sansita">Calories: <span class="roboto "> ${result.recipe.calories.toFixed(2)}</span></p>
                       <p class="card-text text-white Sansita">Diet label:<span class="roboto "> ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</span></p>
                                            
                       <a href="${result.recipe.url}" class="btn btn-danger text-white Dangrek">View recipe</a>
                     </div>
               </div>
            </div>
      `
    });
    searchResultDiv.innerHTML = generatedHTML;
}

{/* <p class="card-text text-white Sansita">ingredients: <span class="roboto "> ${result.recipe.ingredientLines}</span></p> */}