const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  // toggle does the adding and removing on the class when btn is clicked
  search.classList.toggle('active');
  // will put cursor in search bar when it expands
  input.focus();
});
