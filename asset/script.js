// Sélection des sections et des liens
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
let current = "";

    // Vérifie quelle section est visible
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // marge pour le header
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    // Met à jour la nav active
    navLinks.forEach(link => {
        link.classList.remove("text-blue-600", "font-bold");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("text-blue-600", "font-bold");
        }
    });
});

function scrollToNextSection(button) {
  const currentSection = button.closest(".section");
  const sections = document.querySelectorAll(".section");

  const index = Array.from(sections).indexOf(currentSection);
  const nextSection = sections[index + 1];

  if (nextSection) {
    smoothScrollTo(nextSection.offsetTop, 1000); // durée en ms
  }
}

function smoothScrollTo(target, duration) {
  const start = window.scrollY;
  const distance = target - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    // fonction easing (facile pour un défilement fluide)
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


function scrollToFirstSection(button) {
  const firstSection = document.querySelector(".section");
  if (firstSection) {
    smoothScrollTo(firstSection.offsetTop, 1000); // durée en ms
  }
}
