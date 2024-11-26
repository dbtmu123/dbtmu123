// Typing Animation Logic
const titles = ["welcome to my portfolio site!"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const typingTitle = document.querySelector(".typing-title");
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

// Dark Mode and Increase Text Size Buttons
document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const increaseTextBtn = document.getElementById("increase-text-btn");

  // Toggle Dark Mode
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update Typing Title Color Dynamically
    const typingTitle = document.querySelector(".typing-title");
    if (document.body.classList.contains("dark-mode")) {
      typingTitle.style.color = "#ffffff"; // White text in dark mode
      typingTitle.style.borderRight = "2px solid #ffffff"; // White cursor
    } else {
      typingTitle.style.color = ""; // Revert to CSS default
      typingTitle.style.borderRight = ""; // Revert to CSS default
    }
  });

  // Toggle Increased Text Size
  increaseTextBtn.addEventListener("click", () => {
    document.body.classList.toggle("increase-text");
  });

  // Start the typing animation
  type();
});
    const image = document.getElementById('toggleImage');

    image.addEventListener('click', () => { 
    image.classList.toggle('enlarged');
});

// Get the button element
    const clickMeButton = document.getElementById('clickMeButton');

    // Add a click event listener
    clickMeButton.addEventListener('click', () => {
      // Prompt the user for their name
      const name = prompt("What's your name?");
      if (name) {
        alert(`Hello, ${name}!`);
      } else {
        alert("Hello, stranger!");
      }
    });