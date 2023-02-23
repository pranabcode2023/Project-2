console.log(seaFood.meals);



  document.getElementById('searchfield').addEventListener('keyup', function(){
    let pattern = new RegExp(this.value, 'i');
    let resultSet = seaFood.meals.filter(item => item.strMeal.match(pattern) && this.value != '').map(item => `<a href="${item.seaFood}">${item.strMeal} ${item.strMealThumb} ${item.idMeal}</a>`).join(', ');
    document.getElementById('searchresult').innerHTML = resultSet;
  });


  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }