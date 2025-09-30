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

const video = document.querySelector('.home-hero__video');
const unmuteButton = document.getElementById('unmute-button');

const videos = [
  'https://storage.googleapis.com/ausaf-public/vid2',
  'https://storage.googleapis.com/ausaf-public/vid4',
  'https://storage.googleapis.com/ausaf-public/vid3',
  'https://storage.googleapis.com/ausaf-public/vid1'
];

let currentVideoIndex = 0;

const switchVideo = () => {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  video.src = videos[currentVideoIndex];

  if (videos[currentVideoIndex].includes('vid3')) {
    video.classList.add('vertical-video');
  } else {
    video.classList.remove('vertical-video');
  }

  video.play();
};

video.addEventListener('ended', switchVideo);

setInterval(switchVideo, 3000);

const updateVideoCursor = () => {
  if (video.muted) {
    video.classList.remove('unmuted');
    video.classList.add('muted');
  } else {
    video.classList.remove('muted');
    video.classList.add('unmuted');
  }
};

updateVideoCursor();

unmuteButton.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    unmuteButton.textContent = 'Sound On';
  } else {
    video.muted = true;
    unmuteButton.textContent = 'Sound Off';
  }
  updateVideoCursor();
});

video.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    unmuteButton.textContent = 'Sound On';
  } else {
    video.muted = true;
    unmuteButton.textContent = 'Sound Off';
  }
  updateVideoCursor();
});

let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
    return;
  }
  
  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    header.classList.add('header--hidden');
  } else {
    header.classList.remove('header--hidden');
  }
  
  lastScrollTop = scrollTop;
});

