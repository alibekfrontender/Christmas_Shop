function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  const burgerIcon = document
    .getElementById("burger-menu")
    .querySelector(".burger-icon");

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    burgerIcon.innerHTML = "&#10006;"; // Close icon
  } else {
    burgerIcon.innerHTML = "&#9776;"; // Burger icon
  }
}

function showSection(sectionId) {
  // Barcha bo'limlarni yashirish
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Aktiv qismni ko'rsatish
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}
function updateCountdown() {
  const newYear = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = newYear - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Yangilashni har soniyada bajarish
setInterval(updateCountdown, 1000);

// Dastlabki qiymatni ko'rsatish
updateCountdown();
