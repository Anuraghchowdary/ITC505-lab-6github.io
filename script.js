function calculateCalories() {
    var food = document.getElementById("food").value;
    var caloriesPerServing = document.getElementById("calories").value;
    var servings = document.getElementById("servings").value;
    
    var totalCalories = caloriesPerServing * servings;
    
    document.getElementById("totalCalories").innerHTML = "Total calories in " + servings + " servings of " + food + ": " + totalCalories;
}