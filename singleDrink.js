import getDrink from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const presentDrink = async () => {
  // TODO: Getting specific id from URL
  //   const params = new URLSearchParams(window.location.search);
  //   const id = params.get('id');

  // TODO: Getting id from local storage
  const id = localStorage.getItem('drink');
  if (!id) {
    // In case local storage has no id saved
    window.location.replace('./index.html');
  }

  // get single drink
  const data = await getDrink(`${baseURL}${id}`);

  // display single drink
  displayDrink(data);
};

presentDrink();
