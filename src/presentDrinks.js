import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrink = async (url) => {
  // fetch drink
  const data = await fetchDrinks(url);

  // display drink
  // const section = await displayDrinks(data);
  const section = displayDrinks(data);

  // set drink to display as sinlge drink
  if (!section) return;
  setDrink(section);
};

export default showDrink;
