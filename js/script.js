/* Mobile Nav */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button_icon');
const mobileNavNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function() {
  mobileNavIcon.classList.toggle('active');
  mobileNavNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})

/* Video Nav */
const videoBtn = document.querySelector('#video-story-btn');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function () {
  if (videoFile.paused) {
    videoFile.play();
  } else {
    videoFile.paused();
  }
})