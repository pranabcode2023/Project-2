console.log(seafood.meals);

const table = document.querySelector("table");

for(let i = 0; i < seafood.meals.length; i++) {
  const row = document.createElement("tr");
  table.appendChild(row);
  const nameCell = document.createElement("td");
  nameCell.innerHTML = seafood.meals[i].strMeal;
  const idCell = document.createElement("td");
 idCell.innerHTML = seafood.meals[i].idMeal;
  const imgCell =  document.createElement("td");
  

  const mealIMg = document.createElement("img");
  mealIMg.setAttribute("src", seafood.meals[i].strMealThumb);
  mealIMg.setAttribute("alt", seafood.meals[i].strMealThumb.alt);

  imgCell.appendChild( mealIMg);

  row.append(nameCell, idCell,  imgCell);
}

// function createTable(rows, columns) {
//   const table = document.getElementById("example");
//   for (let i = 0; i < rows; i++) {
//     const row = document.createElement("tr");
//     table.appendChild(row);
//     for (let j = 0; j < columns; j++) {
//       const column = document.createElement("td");
//       row.appendChild(column);
//     }
//   }
// }

const bsButt = document.getElementById("bs-butt");

function testButton() {
  console.log("Button has been clicked");
}
function clickDiv() {
  console.log("div has been clicked");
}

// bsButt.addEventListener("click", testButton);

bsButt.addEventListener("click", function() {
  console.log("Button has been clicked anonymously");
}, true)
const div = document.querySelector("div");
div.addEventListener("click", clickDiv, true);

// bsButt.removeEventListener("click", testButton);

const textInput = document.querySelector("input");
textInput.addEventListener("change", function(event) {
  console.log("event value: ", event.target.value);
})