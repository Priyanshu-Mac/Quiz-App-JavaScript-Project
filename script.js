const ques = document.querySelector("#ques");
const ansButtons = document.querySelector("#ans_button");
const nextBtn = document.querySelector("#next_btn");

let currentQuesIdx = 0;
let score = 0;


const questionsList = [
    {
        question: "What is the densest type of star in the universe?",
        answers: [
            { text: "White dwarf", correct: false },
            { text: "Neutron star", correct: true },
            { text: "Red giant", correct: false },
            { text: "Black hole", correct: false },
        ]
    },
    {
        question: "Which programming language is known as the “language of the web”?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
        ]
    },
    {
        question: "Who is known as the 'father of AI'?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Marvin Minsky", correct: false },
            { text: "John McCarthy", correct: true },
            { text: "Geoffrey Hinton", correct: false },
        ]
    },
    {
        question: "Which country is the largest producer of lithium, a key resource for batteries?",
        answers: [
            { text: "Bolivia", correct: false },
            { text: "Australia", correct: true },
            { text: "China", correct: false },
            { text: "Chile", correct: false },
        ]
    },
    {
        question: "Which country recently became the 21st member of BRICS in 2023?",
        answers: [
            { text: "Saudi Arabia", correct: false },
            { text: "Iran", correct: false },
            { text: "Argentina", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "What mathematical shape is found in the patterns of sunflower seeds and pinecones?",
        answers: [
            { text: "Triangle", correct: false },
            { text: "Fibonacci spiral", correct: true },
            { text: "Hexagon", correct: false },
            { text: "Golden rectangle", correct: false },
        ]
    },
    {
        question: "What is the name of NASA’s mission to study the Sun’s outer corona?",
        answers: [
            { text: "Juno", correct: false },
            { text: "Voyager 1", correct: false },
            { text: "Parker Solar Probe", correct: true },
            { text: "Perseverance", correct: false },
        ]
    },
    {
        question: "What device was famously known as the first commercially successful personal computer?",
        answers: [
            { text: "IBM PC", correct: false },
            { text: "Apple II", correct: true },
            { text: "Altair 8800", correct: false },
            { text: "Commodore 64", correct: false },
        ]
    },
    {
        question: "The Amazon Rainforest spans across how many countries?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: true },
            { text: "11", correct: false },
        ]
    },
    {
        question: "What is the theoretical boundary around a black hole called, beyond which nothing can escape?",
        answers: [
            { text: "Singularity", correct: false },
            { text: "Event horizon", correct: true },
            { text: "Accretion disk", correct: false },
            { text: "Schwarzschild radius", correct: false },
        ]
    },
]

const startQuiz = () => {
    currentQuesIdx = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQues();
}

const showQues = () => {
    resetState();
    // let currentQues = questionsList[currentQuesIdx];
    let quesNo = currentQuesIdx + 1;
    ques.innerText = quesNo + ". " + questionsList[currentQuesIdx].question;

    questionsList[currentQuesIdx].answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add("btn");
        ansButtons.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}
const resetState = () => {
    nextBtn.style.display = "none";
    while (ansButtons.firstChild) {
        ansButtons.removeChild(ansButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(ansButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";

}
function showScore() {
    resetState();
    ques.classList.add("finalScore");
    ques.innerHTML = `You scored ${score} out of ${questionsList.length}!`;
    nextBtn.innerText = "Play again!";
    nextBtn.style.display = "block";
}
function handleNextbtn() {
    currentQuesIdx++;
    if (currentQuesIdx < questionsList.length) {
        showQues();
    }
    else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if (currentQuesIdx < questionsList.length) {
        handleNextbtn();
    }
    else {
        startQuiz();
    }
});
startQuiz();
