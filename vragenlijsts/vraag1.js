/* Buttons Fade-In */
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.4}s`;
    });
});