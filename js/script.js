const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".row");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "f734738d";
const APP_KEY = "9d9162fc5933b67c9710dac80f4b482c";


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    console.log(searchQuery);
    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${APP_ID}&app_key${APP_KEY}`
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
}