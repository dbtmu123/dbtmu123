// increase text size
function increaseTextSize() {
    document.body.style.fontSize = "larger";
}

// toggle color mode for colorblind accessibility
function toggleColorMode() {
    document.body.classList.toggle("dark-mode");
}

// display the alt text for an image
function showAltText(imageId) {
    const img = document.getElementById(imageId);
    alert("Alt text: " + img.alt);
}
