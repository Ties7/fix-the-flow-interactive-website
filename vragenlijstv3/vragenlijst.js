//lees alles over queryselectorall op mdn, en wat een array en nodelist is


let questions = document.querySelectorAll('section') //selecteer 'alle' sections en maakt daar een lijst van (nodelist)
    // console.log(questions)
    // console.log(questions.length)
let currentQuestion = 0 //maak variabele currentQuestion aan met als waarde 0
let buttonNext = document.querySelector('.btn-skip') //selecteer de class btn-skip
let buttonPrev = document.querySelector('.btn-back') //selecteer de class btn-back

buttonNext.addEventListener('click', next) //nieuwe click event aanmaken die de functie next() aanroept
buttonPrev.addEventListener('click', prev) //nieuwe click event aanmaken die de functie prev() aanroept


function prev(){
    questions[currentQuestion].classList.remove('show') //de section die op dit moment zichtbaar is de class show bij weghalen als functie next word uitgevoerd
    currentQuestion = currentQuestion - 1 //de variabele currentquestion verlagen om iets met de vorige section te kunnen doen
    // console.log(currentQuestion)
    if(currentQuestion < questions.length){
        questions[currentQuestion].classList.add('show')
    }
    if(currentQuestion == 0){
        buttonPrev.classList.add('hide')
    }

    // Toon de 'volgende' knop als je niet op de laatste vraag bent
    if (currentQuestion < questions.length - 1) {
        buttonNext.classList.remove('hide');
    }
}

function next(){
    // console.log('click')
    // questions[0]
    // console.log(currentQuestion)
    // console.log(questions[currentQuestion])
    questions[currentQuestion].classList.remove('show') //de section die op dit moment zichtbaar is de class show bij weghalen als functie next word uitgevoerd
    currentQuestion = currentQuestion + 1 //de variabele currentquestion ophogen om iets met de volgende section te kunnen doen
    // console.log(currentQuestion)
    // console.log(questions[currentQuestion])
    if(currentQuestion < questions.length){ //als section die op dit moment zichbaar is kleiner is dan de lengte van de aantal sections, wordt dit uitgevoerd. Dan krijgt de section + 1 de class show, dus de volgende section
        questions[currentQuestion].classList.add('show')
    }
    if(currentQuestion == questions.length -1){ //als de section gelijk is aan de hoeveelheid sections die er zijn -1 word dit uitgevoerd. dan krijgt de nextbutton de class hide wat hem weghaald.
        buttonNext.classList.add('hide')
    }
    
    // Toon de 'vorige' knop als je niet op de eerste vraag bent
    if (currentQuestion > 0) {
        buttonPrev.classList.remove('hide');
    }
}