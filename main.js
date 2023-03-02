// Search for Recipe

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



searchBtn.addEventListener("click",()=>{
    let userInp = document.getElementById
    ("user-inp").value;
    if(userInp.length ===0){
        result.innerHTML =`<h3>Please enter recipe name</h3>`;
    }else{
        fetch(url + userInp)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let myMeal= data.meals[0];
            console.log(myMeal);
            console.log(myMeal.strMealThumb);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strInstructions);
            let count = 1;
            let ingredients =[];
        
            for (let i in myMeal) {
                let ingredient ="";
                let measure = "";
        
                if (i.startsWith ("strIngredient") && myMeal[i]
                ){
                    ingredient = myMeal[i];
                    measure = myMeal[`strMeasure` + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}
                    `);
                }
        
            }
        
            console.log (ingredients);
            
            result.innerHTML = `
            <img src= ${myMeal.strMealThumb}>
            <div class="details">
               <h2>${myMeal.strMeal}</h2>
               <h4>${myMeal.strArea}</h4>
            </div>
            <div id="ingredient-con"></div>
            <div id="recipe">
               <button id="hide-recipe">x</button>
               <pre id="instructions">${myMeal.strInstructions}</pre>
            </div>
            <button id="show-recipe">Read more</button>
            `;
        
            let ingredientCon = document.getElementById("ingredient-con");
            let parent = document.createElement("ul");
            let recipe = document.getElementById("recipe");
            let hideRecipe = document.getElementById("hide-recipe");
            let showRecipe = document.getElementById("show-recipe");
            
            ingredients.forEach((i) =>{
                let child =document.createElement("li");
                child.innerText = i;
                parent.appendChild(child);
                ingredientCon.appendChild(parent);
            });
        
            hideRecipe.addEventListener ("click", () =>{
                recipe.style.display = "none";
            });
        
            showRecipe.addEventListener ("click", () =>{
                recipe.style.display = "block";
            });
        
        }) .catch(() =>{
            result.innerHTML =`<h3>Not found</h3>`;
        });
        
    }
});




// image gallery


const image_gallery = document.querySelector(".image--container")
const image_container = document.querySelector(".image--selection")
const loading = '<h1 class="loader">Loading...</h1>'




const showImages = () => {
    // Show loading text if no data
    if (image_container.children.length === 0) image_container.innerHTML = loading
    fetch(`https://api.unsplash.com/photos?client_id=${apiKey}`)
      .then(res => {
        res.json().then(images => {
          // Call the function to create the gallery
          createImageGallery(images)
        })
      })
      .catch(e => {
        console.log(e)
      })
  }


  const createImageGallery = images => {
    let output = ""
    // Show the first image on the viewer
    image_gallery.innerHTML = `<img src="${images[0].urls.regular}" class="animate-entrance image--gallery" alt="${images[0].alt_description}">`
    setTimeout(() => {
      image_gallery.children[0].classList.remove("animate-entrance")
    }, 500)
    // show unselected images
    images.forEach(({ urls, alt_description }) => {
      output += `<img src="${urls.regular}" alt="${alt_description}" class="image__item" />`
    })
    image_container.innerHTML = output
  }



  const changeImage = e => {
    // Get the viewer image element
    const image = image_gallery.children[0]
    if (e.target.src) {
      // change the image
      image.classList.add("animate-entrance")
      image.src = e.target.src
      setTimeout(() => {
        image.classList.remove("animate-entrance")
      }, 800)
    }
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", showImages)
  image_container.addEventListener("click", changeImage)







