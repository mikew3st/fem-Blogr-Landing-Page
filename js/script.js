const toggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.getElementsByClassName('navbar-links');
const toggleSubmenu = document.querySelectorAll('.toggle-links');
const navSubmenu = document.querySelectorAll('.navbar-submenu');
const navArrow = document.querySelectorAll('.nav-arrow');

toggleBtn.addEventListener('click', () => {
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle('active');
  }
  for (let i = 0; i < navArrow.length; i++) {
    navbarLinks[0].classList.contains('active')
      ? (navArrow[i].src = 'images/icon-arrow-dark.svg')
      : (navArrow[i].src = 'images/icon-arrow-light.svg');
  }

  navbarLinks[0].classList.contains('active')
    ? (toggleBtn.src = 'images/icon-close.svg')
    : (toggleBtn.src = 'images/icon-hamburger.svg');
});

for (let i = 0; i < navSubmenu.length; i++) {
  toggleSubmenu[i].addEventListener('click', () => {
    navSubmenu[i].classList.toggle('active');
  });
}
