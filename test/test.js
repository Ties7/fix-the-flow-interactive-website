// Query elementen uit document.
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

const sections = document.querySelectorAll('section');

// Maak variabele 'step' aan.
let step = 0;

// Maak een functie met 'offset' als argument
function nextStep(offset) {
    // Maak de huidige section onzichtbaar
    sections[step].classList.remove('show');

    // Tel de waarde van 'offset' bij 'step' op
    step = step + offset;

    // Maak de huidige stap zichtbaar
    sections[step].classList.add('show');
    
    // Zet de terug knop uit als het de eerste stap is
    prevBtn.disabled = step === 0;

    // Zet de vooruit knop uit als het de laatste stap is
    nextBtn.disabled = step >= sections.length - 1;
}

prevBtn.addEventListener('click', () => nextStep(-1));
nextBtn.addEventListener('click', () => nextStep(1));

nextStep(0);