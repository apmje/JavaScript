function Question(question, answers, correctAnswer) {
    this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer;
};

let score = 0;
let current = 0;
const question1 = new Question("Who directed 2001: A Space Odyssey, A Clockwork Orange and Spartacus?", ["Stanley Kubrick", "Steven Spielberg"], 0);
const question2 = new Question("Who directed Double Indemnity, The Apartment and Sunset Boulevard?", ["John Ford", "Billy Wilder"], 1);
const question3 = new Question("Who directed Wild Strawberries, Fanny and Alexander and Persona?", ["Ingmar Bergman", "Dario Argento"], 0);
const questionArray = [question1, question2, question3];

const questionElement = document.querySelector('#question');
questionElement.textContent = questionArray[current].question;
const scoreElement = document.querySelector('#score');
scoreElement.textContent = `Current score: ${score}`;
const choice0 = document.querySelector('#choice0');
choice0.textContent = questionArray[current].answers[0];
const choice1 = document.querySelector('#choice1');
choice1.textContent = questionArray[current].answers[1];
const progress = document.querySelector('#progress');
progress.textContent = `Question ${current + 1} of ${questionArray.length}`


const chocie0Btn = document.querySelector('#guess0');
choice0Btn.addEventListener('click', (e) => {
    if (questionArray[current].answers[0] === questionArray[current].correctAnswer) {
        score++;
        current++;
    } else {
        current++;
    };
})
const choice1Btn = document.querySelector('#guess1');
choice1Btn.addEventListener('click', (e) => {
    if (questionArray[current].answers[1] === questionArray[current].correctAnswer) {
        score++;
        current++;
    } else {
        current++;
    };
})



