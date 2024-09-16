// Получаем элементы
const navButton = document.querySelector('.header__nav-btn');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
// Добавляем обработчик события на кнопку
navButton.addEventListener('click', function () {
  // Переключаем класс .header--active у элемента .header
  header.classList.toggle('header--active');
  headerNav.classList.toggle('header__nav--active');
});






