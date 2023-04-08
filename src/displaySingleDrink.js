import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const singleImg = get('.drink-img');
const drinkName = get('.drink-name');
const description = get('.drink-desc');
const ingredients = get('.drink-ingredients');

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: image, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  document.title = name;

  singleImg.src = image;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class ="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
  // Alternate
  //   document.body.innerHTML = `<section class="single-drink">
  //       <img src="${image}" class="img" alt="${name}" />
  //       <article class="drink-info">
  //         <h2 class="drink-name">${name}</h2>
  //         <p class="drink-desc">${desc}</p>
  //       <h4>Ingredients:</h4>

  //         <ul class="drink-ingredients">${list
  //           .map((item) => {
  //             if (!item) return;
  //             return `<li><i class ="far fa-check-square"></i>${item}</li>`;
  //           })
  //           .join('')}</ul>
  //         <a href="./index.html" class="btn">all cocktails</a>
  //       </article>
  //     </section>`;
};

export default displayDrink;
