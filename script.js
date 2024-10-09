// Select the circle element
const circle = document.querySelector('.circle');

// Initialize click count
let clickCount = 0;
let hslColor = [Math.floor(Math.random() * 360), 100, 90]; // Start with higher lightness for better visibility

// Function to set the HSL color
function setCircleColor() {
    circle.style.backgroundColor = `hsl(${hslColor[0]}, ${hslColor[1]}%, ${hslColor[2]}%)`; // Use backticks for template literals
}

// Function to darken the color on each click
function darkenCircleColor() {
    clickCount++;

    // Decrease lightness on each click, but don't set to black until the 9th click
    if (clickCount < 9) {
        hslColor[2] = Math.max(0, hslColor[2] - 10); // Decrease lightness
    } else {
        hslColor[2] = 0; // Change to black on the 9th click
    }

    setCircleColor();
}

// Set initial random color
setCircleColor();

// Add click event listener to the circle
circle.addEventListener('click', darkenCircleColor);
