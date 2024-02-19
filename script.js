document.addEventListener('DOMContentLoaded', (event) => {
  fetch('particles-config.json')
    .then(response => response.json())
    .then(config => {
      particlesJS('particles-js', config);

      // Reveal the main content after particles have loaded
      const mainContent = document.getElementById('mainContent');
      mainContent.style.opacity = "1";
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