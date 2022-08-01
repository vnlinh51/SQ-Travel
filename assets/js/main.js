// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu Show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // Click nav__link > remove show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((e) => e.addEventListener('click', linkAction));

// Change Background Header
function scrollHeader() {
  const header = document.getElementById('header');
  // Scroll > 100 viewport height, add scroll-header
  if (this.scrollY >= 100) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// Swiper Discover
var swiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: 'true',
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
  },
});

// Video

const videoFile = document.getElementById('video-file');
const videoBtn = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function handleVideo() {
  if (videoFile.paused) {
    //play
    videoFile.play();

    //change icon play > pause
    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');
  } else {
    //pause
    videoFile.pause();

    //change icon
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
  }
}

videoBtn.addEventListener('click', handleVideo);

function finalVideo() {
  //end video > change icon
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', finalVideo);

//show scroll up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 230) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

// scroll action link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// Dark - Light Theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// if user selected
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// current theme
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// validate
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate theme
themeButton.addEventListener('click', () => {
  // Add or remove icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //save theme
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// Scroll reveal animation
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,
  {
    origin: 'top',
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
           .video__description,
           .subscribe__description`,
  {
    origin: 'left',
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content,
           .subscribe__form`,
  {
    origin: 'right',
    interval: 100,
  }
);
