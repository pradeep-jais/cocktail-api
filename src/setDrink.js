const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    // e.preventDefault();
    // console.log(e.currentTarget, e.target);
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
