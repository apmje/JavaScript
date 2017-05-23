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
const scoreElement = document.querySelector('#score');
const choice0 = document.querySelector('#choice0');
const choice1 = document.querySelector('#choice1');
const progress = document.querySelector('#progress');
nextQuestion();

function nextQuestion() {
    if (current === questionArray.length) {
        scoreElement.textContent = `Quiz over! You're final score is ${score}`;
        choice0Btn.disabled = true;
        choice1Btn.disabled = true;
    } else {
        questionElement.textContent = questionArray[current].question;
        scoreElement.textContent = `Current score: ${score}`;
        choice0.textContent = questionArray[current].answers[0];
        choice1.textContent = questionArray[current].answers[1];
        progress.textContent = `Question ${current + 1} of ${questionArray.length}`
    }
}

const choice0Btn = document.querySelector('#guess0');
choice0Btn.addEventListener('click', (e) => {
    if (0 === questionArray[current].correctAnswer) {
        score++;
        current++;
        nextQuestion();
    } else {
        current++;
        nextQuestion();
    };
});

const choice1Btn = document.querySelector('#guess1');
choice1Btn.addEventListener('click', (e) => {
    if (1 === questionArray[current].correctAnswer) {
        score++;
        current++;
        nextQuestion();
    } else {
        current++;
        nextQuestion();
    };
})