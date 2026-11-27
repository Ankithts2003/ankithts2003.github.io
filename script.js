
// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  // Close menu after selecting a section
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Automatically update copyright year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Rotating text in browser tab is not needed.
// Add future interactive features here.
