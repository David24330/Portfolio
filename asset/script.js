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
  const currentSection = button.closest(".section"); // prend la section actuelle
  const sections = document.querySelectorAll(".section"); // toutes les sections

  const index = Array.from(sections).indexOf(currentSection); // position actuelle
  const nextSection = sections[index + 1]; // section suivante

  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth" // défilement fluide
    });
  }
}


