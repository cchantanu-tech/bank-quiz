const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const branchListScreen = document.getElementById("branch-list-screen");

const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const giveUpBtn = document.getElementById("give-up-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const retryMistakeBtn = document.getElementById("retry-mistake-btn");

const branchListBtn = document.getElementById("branch-list-btn");
const backHomeBtn = document.getElementById("back-home-btn");

const branchTableBody = document.getElementById("branch-table-body");

const progress = document.getElementById("progress");
const question = document.getElementById("question");
const questionTitle = document.getElementById("question-title");
const answerInput = document.getElementById("answer");

const score = document.getElementById("score");
const rate = document.getElementById("rate");

const correctList = document.getElementById("correct-list");
const mistakeList = document.getElementById("mistake-list");

let questions = [];
let currentIndex = 0;
let correctCount = 0;

let correctAnswers = [];
let mistakes = [];

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitAnswer);
giveUpBtn.addEventListener("click", finishQuizMidway);
restartBtn.addEventListener("click", restartQuiz);
homeBtn.addEventListener("click", goHome);
retryMistakeBtn.addEventListener("click", retryMistakes);

branchListBtn.addEventListener("click", showBranchList);
backHomeBtn.addEventListener("click", backHome);

answerInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") submitAnswer();
});

function startQuiz() {
    const order = document.querySelector('input[name="order"]:checked').value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const questionCount = document.querySelector('input[name="questionCount"]:checked').value;

    questions = [...branches];

    if (order === "random") {
        questions.sort(() => Math.random() - 0.5);
    } else if (order === "sequential") {
        questions.sort((a, b) => Number(a.code) - Number(b.code));
    } else if (order === "randomSequential") {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        if (questionCount !== "all") {
            questions = shuffled.slice(0, Number(questionCount));
        } else {
            questions = shuffled;
        }
        questions.sort((a, b) => Number(a.code) - Number(b.code));
    }

    if (order !== "randomSequential" && questionCount !== "all") {
        questions = questions.slice(0, Number(questionCount));
    }

    currentIndex = 0;
    correctCount = 0;
    correctAnswers = [];
    mistakes = [];

    startScreen.classList.add("hidden");
    branchListScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentIndex];
    const mode = document.querySelector('input[name="mode"]:checked').value;

    progress.textContent = `問題 ${currentIndex + 1} / ${questions.length}`;

    if (mode === "nameToCode") {
        questionTitle.textContent = "支店名 / 出張所名";
        question.innerHTML = `
            ${currentQuestion.name}<br>
            <span style="font-size:0.95rem; font-weight:normal; color:#64748b; display:block; margin-top:4px;">（${currentQuestion.kana}）</span>
        `;
        answerInput.placeholder = "店番を入力";
    } else {
        questionTitle.textContent = "店番";
        question.textContent = currentQuestion.code;
        answerInput.placeholder = "名前（漢字 or ひらがな）";
    }

    answerInput.value = "";
    answerInput.focus();
}

function submitAnswer() {
    const currentQuestion = questions[currentIndex];
    const mode = document.querySelector('input[name="mode"]:checked').value;

    const answer = answerInput.value.trim();
    if (answer === "") return;

    let isCorrect = false;

    if (mode === "nameToCode") {
        isCorrect = answer === currentQuestion.code;
    } else {
        const normalizedAnswer = answer.replace(/\s+/g, "").toLowerCase();
        const normalizedName = currentQuestion.name.replace(/\s+/g, "").toLowerCase();
        const normalizedKana = currentQuestion.kana.replace(/\s+/g, "").toLowerCase();
        
        // 「支店」や「出張所」を入力し忘れても正解にする親切設計
        const rawName = normalizedName.replace(/支店|出張所/g, "");
        const rawKana = normalizedKana.replace(/してん|しゅっちょうしょ/g, "");

        isCorrect = (
            normalizedAnswer === normalizedName || 
            normalizedAnswer === normalizedKana ||
            normalizedAnswer === rawName ||
            normalizedAnswer === rawKana
        );
    }

    if (isCorrect) {
        correctCount++;
        correctAnswers.push({
            name: currentQuestion.name,
            code: currentQuestion.code,
            kana: currentQuestion.kana
        });
    } else {
        mistakes.push({
            name: currentQuestion.name,
            code: currentQuestion.code,
            answer: answer,
            kana: currentQuestion.kana
        });
    }

    currentIndex++;

    if (currentIndex >= questions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const mode = document.querySelector('input[name="mode"]:checked').value;
    const percentage = Math.round((correctCount / questions.length) * 100);

    score.textContent = `${questions.length}問中 ${correctCount}問正解`;
    rate.textContent = `正答率 ${percentage}%`;

    correctList.innerHTML = "";
    mistakeList.innerHTML = "";

    correctAnswers.forEach(correct => {
        const li = document.createElement("li");
        if (mode === "nameToCode") {
            li.innerHTML = `<strong>${correct.name}</strong> → ${correct.code}`;
        } else {
            li.innerHTML = `店番: <strong>${correct.code}</strong> → ${correct.name}`;
        }
        correctList.appendChild(li);
    });

    mistakes.forEach(mistake => {
        const li = document.createElement("li");
        const correctText = mode === "nameToCode" ? mistake.code : `${mistake.name}`;
        if (mode === "nameToCode") {
            li.innerHTML = `
                <strong>${mistake.name}</strong><br>
                あなたの回答：<span style="color:#ef4444;">${mistake.answer}</span> / 正解：<strong>${correctText}</strong>
            `;
        } else {
            li.innerHTML = `
                <strong>店番: ${mistake.code}</strong><br>
                あなたの回答：<span style="color:#ef4444;">${mistake.answer}</span> / 正解：<strong>${correctText}</strong>
            `;
        }
        mistakeList.appendChild(li);
    });
}

function restartQuiz() {
    startQuiz();
}

function retryMistakes() {
    if (mistakes.length === 0) return;

    questions = mistakes.map(m => ({
        code: m.code,
        name: m.name,
        kana: m.kana
    }));

    currentIndex = 0;
    correctCount = 0;
    correctAnswers = [];
    mistakes = [];

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}

function goHome() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    branchListScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
}

function showBranchList() {
    startScreen.classList.add("hidden");
    branchListScreen.classList.remove("hidden");
    branchTableBody.innerHTML = "";

    const sortedBranches = [...branches].sort((a, b) => Number(a.code) - Number(b.code));

    sortedBranches.forEach(branch => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${branch.code}</strong></td>
            <td>${branch.name}</td>
            <td style="color:#64748b; font-size:0.85rem;">${branch.kana}</td>
        `;
        branchTableBody.appendChild(row);
    });
}

function backHome() {
    branchListScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
}

function finishQuizMidway() {
    if (currentIndex === 0) {
        goHome();
        return;
    }
    if (confirm("ここまでの回答でテストを終了し、結果を表示しますか？")) {
        questions = questions.slice(0, currentIndex);
        showResult();
    }
}
