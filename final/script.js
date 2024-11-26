const titles = ["hello! i'm daanyaal. welcome to my site!"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTitle = document.querySelector(".typing-title");

function type() {
  const currentTitle = titles[titleIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingTitle.textContent = currentTitle.slice(0, charIndex);

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, 500); // Pause before typing the next title
  } else {
    setTimeout(type, isDeleting ? 50 : 100); // Typing/Deleting speed
  }
}

document.addEventListener("DOMContentLoaded", type);

// accessiblities
// select buttons
const darkModeBtn = document.getElementById("dark-mode-btn");
const increaseTextBtn = document.getElementById("increase-text-btn");

// Toggle Dark Mode
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const sections = document.querySelectorAll("header, .content-section");
    sections.forEach(section => section.classList.toggle("dark-mode"));
});

// Toggle Increased Text Size
increaseTextBtn.addEventListener("click", () => {
    document.body.classList.toggle("increase-text");
});
