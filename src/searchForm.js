import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const form = get('.search-form');
const input = get('.input');

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
