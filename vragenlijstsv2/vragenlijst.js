// Query elementen uit document.
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');

const progressBars = document.querySelectorAll('.progress > div');

// Maak variabele 'step' aan.
let step = 0;

// Maak een functie met 'offset'
function nextStep(offset) {
    // Maak de huidige section onzichtbaar
    sections[step]?.classList.remove('show');
    
    // Tel de waarde van 'offset' bij 'step' op
    step = step + offset;
    
    // Maak de huidige stap zichtbaar
    sections[step]?.classList.add('show');

    // Maak de huidige progress actief, en de volgende inactief
    progressBars[step]?.classList.add('active');
    progressBars[step + 1]?.classList.remove('active');

    // Voeg on-intro klasse toe als stap 0 is
    footer.classList.toggle('on-intro', step === 0);
}

window.addEventListener('click', function (event) {
    // Kijk of doelwit van evenement een stap-knop is
    const button = event.target.closest('[data-step]');
    if(!button) return;

    // 
    const step = parseInt(button.dataset.step);
    nextStep(step); // "1" wordt 1 als je hem parst
});

// Zorgt dat eerste pagina zichtbaar is, offset = 0
nextStep(0);



// Buttons fade-in
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.4}s`;
    });
});