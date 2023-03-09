const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];

searchButton.addEventListener("click", searchMeal);
searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchMeal();
  }
});

function searchMeal() {
  const searchText = searchInput.value.trim();
  if (searchText === "") {
    alert("Please enter a search term.");
    return;
  }

  fetch(API_URL + searchText)
    .then(response => response.json())
    .then(data => {
      tableBody.innerHTML = "";
      if (data.meals === null) {
        alert("No results found.");
        return;
      }

      data.meals.forEach(meal => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell();
        const idCell = row.insertCell();
        const imageCell = row.insertCell();
        nameCell.innerText = meal.strMeal;
        idCell.innerText = meal.idMeal;
        imageCell.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`;
      });
    })
    .catch(error => alert("Error fetching data."));
}
