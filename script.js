// Active navbar on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ================================
// Marquee Auto-Clone for Portfolio
// ================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.auto-clone').forEach(track => {
    const items = Array.from(track.children);

    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  });
});

