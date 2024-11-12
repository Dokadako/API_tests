# Recipe Finder App

The **Recipe Finder app** is a web application designed to help users find, explore, and save recipes with ease. By integrating with the Spoonacular API, it offers a comprehensive and user-friendly platform for discovering culinary creations.

## Features

- **Search Recipes:** Enter keywords to search and discover recipes presented in a visually appealing grid format.
- **Recipe Details:** View comprehensive details including ingredients, preparation time, instructions, and nutritional information through a sleek modal interface.
- **Favorites:** Seamlessly save your top recipes to a favorites list for convenient future access.
- **Responsive Design:** The app maintains a user-friendly experience across both desktop and mobile devices.

## Project Structure

- **HTML:** 
  - `index.html` — The foundational structure of the app.
- **CSS:** 
  - `css/styles.css` — Custom styles enhancing the visual appeal and user experience of the app.
- **JavaScript:** 
  - `js/app.js` — The core logic driving recipe fetching, display, and management of both recipes and favorites.

## Setup

### Prerequisites

- Obtain an API key from Spoonacular to enable recipe data retrieval.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. **Set up your API key:**

   - Replace the `API_KEY` constant in `js/app.js` with your Spoonacular API key.

3. **Launch the app:**

   - Open `index.html` in a web browser to begin exploring recipes.

## Usage

- **Search for Recipes:** Utilize the search bar to find recipes that pique your interest.
- **View Details:** Click "View Recipe" on any recipe card to examine deeper details in a stylish modal window.
- **Add to Favorites:** Preserve your liked recipes by clicking "Add to Favorites."
- **View Favorites:** Access your curated list of saved recipes with the "View Favorites" button.

## Code Overview

- **API Fetching:** The app retrieves recipes via the Spoonacular API, constrained to 10 results per query for optimal performance.
- **Modal Display:** Engage with recipe details through a modal approach, ensuring a clean and interactive browsing experience.
- **Local Storage:** Favorites are retained in the browser’s local storage, allowing continuous access to your preferred recipes.

## Technologies Used

- **HTML:** Structures the layout of the app.
- **CSS:** Elevates the app's appearance and usability.
- **JavaScript:** Facilitates API data retrieval, DOM manipulation, and manages local storage functionalities for favorites.

## Future Enhancements

- **Pagination:** Introduce pagination to handle larger sets of results efficiently.
- **User Authentication:** Implement account-based saving to personalize favorites management.
- **Advanced Filters:** Incorporate filters to accommodate dietary restrictions, cuisine preferences, and more.

Embrace the culinary world with the Recipe Finder app – your gateway to an endless variety of dishes and flavors!
