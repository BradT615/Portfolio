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
});
