// Remove the theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference, otherwise use default light theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Force the correct icon on page load
function updateIcon(theme) {
  if (theme === 'light') {
    icon.className = 'ri-moon-line'; // Moon icon for light mode
  } else {
    icon.className = 'ri-sun-line'; // Sun icon for dark mode
  }
}

// Initialize with correct icon
updateIcon(savedTheme);

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
  // Don't prevent default here - let it submit to the hidden iframe
  
  const submitButton = contactForm.querySelector("button[type='submit']");
  if (submitButton) {
    submitButton.innerText = "SENDING...";
    submitButton.disabled = true;
  }
  
  // Remove any existing success messages first
  const existingMessage = document.querySelector(".success-message");
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create a success message element
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.innerHTML = "<p>Your message has been successfully submitted!</p>";
  
  // Short delay to simulate submission (form is actually submitting to the hidden iframe)
  setTimeout(() => {
    // Insert the message after the form
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    
    // Reset the form
    contactForm.reset();
    
    // Reset button
    if (submitButton) {
      submitButton.innerText = "SEND IT";
      submitButton.disabled = false;
    }
    
    // Remove the success message after 5 seconds
    setTimeout(() => {
      successMessage.style.opacity = "0";
      successMessage.style.transition = "opacity 0.5s ease";
      setTimeout(() => successMessage.remove(), 500);
    }, 5000);
  }, 1000);
});

