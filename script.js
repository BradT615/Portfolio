document.addEventListener('DOMContentLoaded', (event) => {
  fetch('particles-config.json')
    .then(response => response.json())
    .then(config => {
      particlesJS('particles-js', config);

      // Reveal the main content after particles have loaded
      const mainContent = document.getElementById('mainContent');
      mainContent.style.opacity = "1";

      // Animate the containers
      gsap.from('.left-container', { duration: 0.6, x: '-100%', opacity: 0 });
      gsap.from('.right-container', { duration: 0.6, x: '100%', opacity: 0 });

      // Animate the text inside the containers
      gsap.from('.left-container > *', { duration: 1, delay: 0, opacity: 0 });
      gsap.from('.right-container > *', { duration: 1, delay: 0, opacity: 0 });
    });

    var controller = new ScrollMagic.Controller();
    var projectAnimations = document.querySelectorAll('.project-animation');

    // For each .project-animation element
    projectAnimations.forEach(function(projectAnimation) {
      // Create a GSAP animation
      var tween = gsap.from(projectAnimation, {duration: 0.4, x: '100%', opacity: 0});

      // Create a ScrollMagic scene
      new ScrollMagic.Scene({
        triggerElement: projectAnimation,
        triggerHook: 0.95,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
    });

  var spotifyModal = document.getElementById("youtubeModal");
  var qrModal = document.getElementById("qrModal");

  var card = document.querySelector(".spotify-project");
  var qrCard = document.querySelector(".qr-project");

  var closeSpotifyModal = document.getElementById("closeSpotifyModal");
  var closeQrModal = document.getElementById("closeQrModal");

  card.addEventListener('click', function() {
    spotifyModal.classList.remove("hidden");
    spotifyModal.classList.add("flex");
  });
  qrCard.addEventListener('click', function() {
    qrModal.classList.remove("hidden");
    qrModal.classList.add("flex");
  });

  closeSpotifyModal.addEventListener('click', function() {
    spotifyModal.classList.remove("flex");
    spotifyModal.classList.add("hidden");
  });
  closeQrModal.addEventListener('click', function() {
    qrModal.classList.remove("flex");
    qrModal.classList.add("hidden");
  });

  window.addEventListener('click', function(event) {
    if (event.target == spotifyModal) {
      spotifyModal.classList.remove("flex");
      spotifyModal.classList.add("hidden");
    }
  });
  window.addEventListener('click', function(event) {
    if (event.target == qrModal) {
      qrModal.classList.remove("flex");
      qrModal.classList.add("hidden");
    }
  });
});