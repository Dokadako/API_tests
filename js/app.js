const API_KEY = "7f90c6f04dc4424eb13152711cef2b67";
const searchInput = document.getElementById("search");
const recipesContainer = document.getElementById("recipes");
const modal = document.getElementById("modal");
const recipeDetailsContainer = document.getElementById("recipeDetails");
const closeModal = document.getElementById("closeModal");
const favoritesSection = document.getElementById("favoritesSection");
const favoritesBtn = document.getElementById("favoritesBtn");
// Fetch and display recipes based on the search input
async function fetchRecipes(query) {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&addRecipeInformation=true&apiKey=${API_KEY}`);
    const data = await response.json();
    displayRecipes(data.results);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

// Display recipes in grid format
function displayRecipes(recipes) {
  recipesContainer.innerHTML = "";
  recipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
            <img src="https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>Preparation Time: ${recipe.readyInMinutes} mins</p>
            <button onclick="showRecipeDetails(${recipe.id})">View Recipe</button>
            <button onclick="saveToFavorites(${recipe.id})">Add to Favorites</button>
        `;// надо дивку добавить
    recipesContainer.appendChild(recipeCard);
  });
}

// Show recipe details in a modal
async function showRecipeDetails(id) {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
    const recipe = await response.json();
    recipeDetailsContainer.innerHTML = `
            <h2>${recipe.title}</h2>
            <p><strong>Ingredients:</strong></p>
            <ul>${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join("")}</ul>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <p><strong>Nutritional Information:</strong></p>
            <p>Calories: ${recipe.summary}</p>
        `;
    modal.style.display = "block";
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }
}

// Save a recipe to local storage
function saveToFavorites(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Recipe added to favorites!");
  } else {
    alert("Recipe is already in favorites!");
  }
}
favoritesBtn.addEventListener("click", () => {
  favoritesSection.classList.toggle("hidden");
  recipes.classList.toggle("hidden");
  loadFavorites();
});

function loadFavorites() {
  favoritesSection.innerHTML = ""; // Clear previous content
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.forEach(id => {
    fetchRecipeById(id).then(recipe => {
      const recipeCard = createRecipeCard(recipe);
      favoritesSection.appendChild(recipeCard);
    });
  });
}

async function fetchRecipeById(id) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  return await response.json();
}

function createRecipeCard(recipe) {
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipe-card");
  recipeCard.innerHTML = `
        <img src="https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>Preparation Time: ${recipe.readyInMinutes} mins</p>
        <button onclick="showRecipeDetails(${recipe.id})">View Recipe</button>
    `;
  return recipeCard;
}

// Close the modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Search event listener
searchInput.addEventListener("keyup", (event) => {
  const query = event.target.value;
  if (query.length > 2) {
    fetchRecipes(query);
  }
});
