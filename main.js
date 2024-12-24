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

// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace YOUR_USER_ID with your EmailJS User ID

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Send form data using EmailJS
  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#contact-form")
    .then(
      (response) => {
        alert("Message sent successfully!");
        contactForm.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
      }
    );
});


