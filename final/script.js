// handles typing animation for titles
const titles = ["welcome to my portfolio site!"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const typingTitle = document.querySelector(".typing-title");
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    charIndex--; // delete one character
  } else {
    charIndex++; // type one character
  }

  typingTitle.textContent = currentTitle.slice(0, charIndex);

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true; // start deleting after title is fully typed
    setTimeout(type, 1000); // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false; // start typing the next title
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, 500); // pause before typing the next title
  } else {
    setTimeout(type, isDeleting ? 50 : 100); // adjust speed for typing and deleting
  }
}

// handles dark mode and text size toggle
document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const increaseTextBtn = document.getElementById("increase-text-btn");

  // toggle dark mode
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // update typing title color dynamically for dark mode
    const typingTitle = document.querySelector(".typing-title");
    if (document.body.classList.contains("dark-mode")) {
      typingTitle.style.color = "#ffffff"; // set text color to white
      typingTitle.style.borderRight = "2px solid #ffffff"; // set cursor color to white
    } else {
      typingTitle.style.color = ""; // revert to default color
      typingTitle.style.borderRight = ""; // revert to default cursor
    }
  });

  // toggle increased text size
  increaseTextBtn.addEventListener("click", () => {
    document.body.classList.toggle("increase-text");
  });

  // start the typing animation
  type();
});

// handles image enlargement toggle on click
const image = document.getElementById('toggleImage');
image.addEventListener('click', () => { 
  image.classList.toggle('enlarged'); // toggle the enlarged class
});

// handles click event for "click me" button
const clickMeButton = document.getElementById('clickMeButton');
clickMeButton.addEventListener('click', () => {
  const name = prompt("What's your name?"); // prompt user for their name
  if (name) {
    alert(`Hello, ${name}!`); // greet with name if provided
  } else {
    alert("Hello, stranger!"); // default greeting if no name is entered
  }
});

// handles dropdown visibility toggle for links menu
const linksBtn = document.getElementById('links-btn');
const linksMenu = document.getElementById('links-dropdown-menu');
linksBtn.addEventListener('click', () => {
  const isVisible = linksMenu.style.display === 'block'; // check if menu is visible
  linksMenu.style.display = isVisible ? 'none' : 'block'; // toggle visibility
});

// closes the dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!linksBtn.contains(event.target) && !linksMenu.contains(event.target)) {
    linksMenu.style.display = 'none'; // hide the menu
  }
});