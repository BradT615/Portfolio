// script.js

document.addEventListener('DOMContentLoaded', (event) => {
  fetch('particles-config.json')
    .then(response => response.json())
    .then(config => {
      particlesJS('particles-js', config);

      // Reveal the main content after particles have loaded
      const mainContent = document.getElementById('mainContent');
      mainContent.style.opacity = "1";
    });
  
  // Get the modal
  var modal = document.getElementById("youtubeModal");

  // Get the card element that opens the modal
  var card = document.querySelector(".spotify-project");

  // Get the close button element that closes the modal
  var closeModal = document.getElementById("closeModal");

  // When the card is clicked, open the modal
  card.addEventListener('click', function() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  // When the close button is clicked, close the modal
  closeModal.addEventListener('click', function() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
      }
  });
});
