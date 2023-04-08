import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const section = get('.section-center');
const title = get('.title');
const loading = get('.loading');

const displayDrinks = ({ drinks }) => {
  if (!drinks) {
    title.textContent = `Sorry, no drinks matched your search`;
    section.innerHTML = null;
    hideLoading();
    return;
  }
  const drinksList = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `
        <!-- single drink  -->
        <a href="./drink.html?id=${id}">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>
        <!-- end of single drink  -->`;
    })
    .join('');

  // hide loading
  hideLoading();
  section.innerHTML = drinksList;
  title.textContent = '';
  return section;
};

export default displayDrinks;
