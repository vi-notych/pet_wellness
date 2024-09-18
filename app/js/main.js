// Получаем элементы
const navButton = document.querySelector('.header__nav-btn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
// Добавляем обработчик события на кнопку
navButton.addEventListener('click', function () {
  // Переключаем класс .header--active у элемента .header
  body.classList.toggle('no-scroll');
  headerNav.classList.toggle('header__nav--active');
  header.classList.toggle('header--active');
});






