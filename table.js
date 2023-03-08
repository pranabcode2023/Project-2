
const tbody = document.querySelector("#table tbody");
const searchButton = document.querySelector("#search-button");

// genarate table with data.js

seafood.meals.forEach(meal => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${meal.strMeal}</td>
    <td>${meal.idMeal}</td>
   <td><img src="${meal.strMealThumb}" alt="${meal.strMeal}"></td>
  `;
  tbody.appendChild(tr);
});

// Search functionality
searchButton.addEventListener("click", () => {
  const searchInput = document.querySelector("#search-input");
  const filter = searchInput.value.toUpperCase();
  const rows = tbody.querySelectorAll("tr");
  
  rows.forEach(row => {
    const strMeal = row.querySelectorAll("td")[0].textContent.toUpperCase();
    const idMeal = row.querySelectorAll("td")[1].textContent.toUpperCase();
    
    
    if (strMeal.indexOf(filter) > -1 || idMeal.indexOf(filter) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
