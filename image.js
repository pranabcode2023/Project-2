const galleryContainer = document.querySelector('.gallery-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
	.then(response => response.json())
	.then(data => {
		data.meals.forEach((meal, index) => {
			if (index < 28) {  // display only the first 28 meals
				const galleryItem = document.createElement('div');
				galleryItem.classList.add('gallery-item');

				const mealImg = document.createElement('img');
				mealImg.src = meal.strMealThumb;

				const mealName = document.createElement('h2');
				mealName.innerText = meal.strMeal;

				galleryItem.appendChild(mealImg);
				galleryItem.appendChild(mealName);

				galleryContainer.appendChild(galleryItem);
			}
		});
	})
	.catch(error => console.error(error));




