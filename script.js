document.getElementById('copy-link-button').addEventListener('click', function() {
  // Get the URL of your portfolio website
  const websiteURL = 'https://shubham-1809.github.io/My-Personal-Portfolio/';

  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = websiteURL;

  // Append the input element to the document
  document.body.appendChild(tempInput);

  // Select the input content
  tempInput.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Provide user feedback (e.g., tooltip or message)
  alert('Link copied to clipboard');
});

function closeMenu() {
  const checkbox = document.getElementById('click');
  checkbox.checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 4) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('click');

  function closeMenu() {
      navToggle.checked = false;
      toggleNavbar();
  }

  function toggleNavbar() {
      var body = document.body;
      if (navToggle.checked) {
          // Navbar is open
          body.style.overflow = 'hidden'; // Disable scrolling
      } else {
          // Navbar is closed
          body.style.overflow = 'auto'; // Enable scrolling
      }
  }

  navToggle.addEventListener('change', toggleNavbar);

  // Close navbar when a nav link is clicked
  var navLinks = document.querySelectorAll('nav ul a');
  navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
  });
});
