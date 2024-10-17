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

window.addEventListener('scroll', function () {
  const parallaxElements = document.querySelectorAll('[data-type="parallax"]');
  if (window.innerWidth > 1200) {
    for (let i = 0; i < parallaxElements.length; i++) {
      const element = parallaxElements[i];
      const speed = 0.11;
      const yPos = -((window.scrollY - element.offsetTop) * speed - 100);
      element.style.objectPosition = `center ${yPos}px`;
    }
  } else {
    // Отключаем параллакс 
    for (let i = 0; i < parallaxElements.length; i++) {
      const element = parallaxElements[i];
      element.style.objectPosition = `center 0px`;
    }
  }
});

// Добавьте события прокрутки и изменения размера окна
window.addEventListener('scroll', handleParallax);
window.addEventListener('resize', handleParallax);

// Вызовите функцию один раз для начальной настройки
handleParallax();








