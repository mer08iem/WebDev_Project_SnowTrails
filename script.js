// Find the Reduce Motion button
const motionButton = document.getElementById("motion-toggle");

// Create a function to toggle animations
function toggleMotion() {

    document.body.classList.toggle("reduce-motion");

    if (document.body.classList.contains("reduce-motion")) {
        motionButton.textContent = "Reduce Motion: ON";
        motionButton.setAttribute("aria-pressed", "true");
    } else {
        motionButton.textContent = "Reduce Motion: OFF";
        motionButton.setAttribute("aria-pressed", "false");
    }

}

// Listen for a button click
if (motionButton) {
    motionButton.addEventListener("click", toggleMotion);
}

// Find the Previous and Next buttons
const previousButton = document.getElementById("previous-destination");
const nextButton = document.getElementById("next-destination");

// Find the destination container
const destinationContainer = document.querySelector(".destination-container");

// Set how far the destinations move
const scrollAmount = 300;

// Next button
if (nextButton && destinationContainer) {
    nextButton.addEventListener("click", function() {
        destinationContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
}

// Previous button
if (previousButton && destinationContainer) {
    previousButton.addEventListener("click", function() {
        destinationContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });
}