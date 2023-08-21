// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})




//Nav Hover


var navHover = document.getElementById('nav-hover');
var header = document.querySelector('.header');

let lastScrollPosition = 0;
let isMouseOverNav = false;  // Track if mouse is over the nav or nav-hover
let isMouseOverHeader = false;  // Track if mouse is over the header

navHover.addEventListener('mouseenter', function() {
  isMouseOverNav = true;
  header.style.top = '0';
});

navHover.addEventListener('mouseleave', function() {
  isMouseOverNav = false;
  if (!isMouseOverHeader) {  // Only hide if mouse isn't over the header
    header.style.top = '-100%';
  }
});

header.addEventListener('mouseenter', function() {
  isMouseOverHeader = true;
  header.style.top = '0';
});

header.addEventListener('mouseleave', function() {
  isMouseOverHeader = false;
  if (!isMouseOverNav) {  // Only hide if mouse isn't over nav-hover
    header.style.top = '-100%';
  }
});

window.addEventListener('scroll', function() {
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // If scrolling up
  if (lastScrollPosition > currentScrollPosition) {
    header.style.top = '0';
  } 
  // If scrolling down and not hovering over nav elements
  else if (!isMouseOverNav && !isMouseOverHeader) {
    header.style.top = '-100%';
  }

  // Update last scroll position
  lastScrollPosition = currentScrollPosition;
});







//Hide and display the stuff

// document.getElementById('toggleButton').addEventListener('click', function() {
//   const otherProjects = document.getElementById('otherProjects');
//   if (otherProjects.style.display === 'none') {
//       otherProjects.style.display = 'block';
//   } else {
//       otherProjects.style.display = 'none';
//   }
// });


//This could clear the form
// const formSubmitButton = document.getElementById('submitButton');

// formSubmitButton.addEventListener('click', (event) => {
//     // Get the form element
//     const form = event.target.form;
    
//     // Optional: If you want to prevent the form from actually submitting (for testing)
//     // event.preventDefault();

//     // Clear all the input and textarea elements
//     form.querySelectorAll('input[type="text"], textarea').forEach(input => {
//         input.value = '';
//     });
// });
