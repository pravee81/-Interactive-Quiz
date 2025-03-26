
const questions = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["&lt;script src='xxx.js'&gt;", "&lt;script href='xxx.js'&gt;", "&lt;script ref='xxx.js'&gt;"],
        answer: "&lt;script src='xxx.js'&gt;",
        explanation: "In HTML, external scripts are linked with &lt;script src='filename.js'&gt;."
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems"],
        answer: "Netscape",
        explanation: "Java  Script was originally developed by Netscape."
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');"],
        answer: "alert('Hello World');",
        explanation: "The correct JavaScript syntax for displaying alerts is alert('text')."
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["&lt;script&gt;", "&lt;javascript&gt;", "&lt;js&gt;"],
        answer: "&lt;script&gt;",
        explanation: "JavaScript code is placed inside &lt;script&gt; tags."
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "-", "=="],
        answer: "=",
        explanation: "The assignment operator in JavaScript is '='."
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "create myFunction()"],
        answer: "function myFunction()",
        explanation: "Functions are declared using 'function functionName()'."
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if (i == 5)", "if i = 5", "if i == 5 then"],
        answer: "if (i == 5)",
        explanation: "The correct syntax for an if statement is if (condition) { }."
    },
    {
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)"],
        answer: "while (i <= 10)",
        explanation: "The while loop starts with while (condition)."
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onclick", "onchange", "onmouseclick"],
        answer: "onclick",
        explanation: "The onclick event triggers on a mouse click."
    },
    {
        question: "Which method is used to round a number to the nearest integer?",
        options: ["Math.round()", "Math.rnd()", "Math.floor()"],
        answer: "Math.round()",
        explanation: "Math.round() rounds to the nearest integer."
    }
];

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = 600;

function startQuiz() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    showQuestion();
    startTimer();
}

function showQuestion() {
    document.getElementById('questionTitle').innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('questionText').innerText = questions[currentQuestion].question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    questions[currentQuestion].options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<input type="radio" name="option" value="${index}" ${answers[currentQuestion] === index ? 'checked' : ''}> ${opt}`;
        div.onclick = () => { 
            answers[currentQuestion] = index;
            showPagination();
        };
        optionsDiv.appendChild(div);
    });

    document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').style.display = currentQuestion < questions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('submitBtn').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
    showPagination();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}
let timer;
function startTimer() {
    const timerElement = document.getElementById("timer");
    const interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.innerText = `⏳${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(interval);
            submitQuiz();
        }
    }, 1000);
}

function showPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement('button');
        btn.innerText = i + 1;
        btn.className = answers[i] !== null ? 'active' : '';
        btn.onclick = () => {
            currentQuestion = i;
            showQuestion();
        };
        pagination.appendChild(btn);
    }
}

function submitQuiz() {
    clearInterval(timer);
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';

    let correct = 0, wrong = 0, unmarked = 0;
    answers.forEach((ans, i) => {
        if (ans === null) unmarked++;
        else if (questions[i].options[ans] === questions[i].answer) correct++;
        else wrong++;
    });

    document.getElementById('scoreCircle').innerHTML = `
        <svg width="200" height="200">
            <circle cx="100" cy="100" r="90" stroke="green" stroke-width="20" fill="none" stroke-dasharray="${correct * 56.5}, 565"></circle>
            <circle cx="100" cy="100" r="90" stroke="red" stroke-width="20" fill="none" stroke-dasharray="${wrong * 56.5}, 565" transform="rotate(${correct * 36}, 100, 100)"></circle>
            <circle cx="100" cy="100" r="90" stroke="gray" stroke-width="20" fill="none" stroke-dasharray="${unmarked * 56.5}, 565" transform="rotate(${(correct + wrong) * 36}, 100, 100)"></circle>
            <text x="100" y="115" text-anchor="middle" font-size="28" fill="#000">${correct}/${questions.length}</text>
        </svg>
    `;
}

startTimer();