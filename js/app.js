// =======================
// 画面要素の取得
// =======================

const modeScreen = document.getElementById("mode-screen");
const normalScreen = document.getElementById("normal-screen");
const testScreen = document.getElementById("test-screen");

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const branchListScreen = document.getElementById("branch-list-screen");

// モード選択ボタン
const normalModeBtn = document.getElementById("normal-mode-btn");
const testModeBtn = document.getElementById("test-mode-btn");

// 通常モード
const startBtn = document.getElementById("start-btn");

// テストモード
const startTestBtn = document.getElementById("start-test-btn");
const testButtons = document.querySelectorAll(".test-btn");

// 共通
const submitBtn = document.getElementById("submit-btn");
const giveUpBtn = document.getElementById("give-up-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const retryMistakeBtn = document.getElementById("retry-mistake-btn");

const branchListBtn = document.getElementById("branch-list-btn");
const branchListBtn2 = document.getElementById("branch-list-btn2");
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

// =======================
// テストモード問題セット
// =======================
const writtenTest1 = [
    { question: "三木", answer: "226", type: "nameToCode" },
    { question: "311", answer: "庵治", type: "codeToName" },

    { question: "古高松", answer: "312", type: "nameToCode" },
    { question: "222", answer: "香西", type: "codeToName" },

    { question: "一宮", answer: "341", type: "nameToCode" },
    { question: "305", answer: "鬼無", type: "codeToName" },

    { question: "鶴市", answer: "342", type: "nameToCode" },
    { question: "225", answer: "志度", type: "codeToName" },

    { question: "伏石", answer: "304", type: "nameToCode" },
    { question: "221", answer: "仏生山", type: "codeToName" },

    { question: "水田", answer: "315", type: "nameToCode" },
    { question: "219", answer: "太田", type: "codeToName" },

    { question: "円座", answer: "223", type: "nameToCode" },
    { question: "314", answer: "医大前", type: "codeToName" },

    { question: "頭脳化センター", answer: "357", type: "nameToCode" },
    { question: "309", answer: "畑田", type: "codeToName" },

    { question: "屋島", answer: "220", type: "nameToCode" },
    { question: "224", answer: "八栗", type: "codeToName" },

    { question: "川島", answer: "227", type: "nameToCode" },
    { question: "359", answer: "さぬき市役所", type: "codeToName" }
];

const writtenTest2 = [
    { question: "仁尾", answer: "284", type: "nameToCode" },
    { question: "335", answer: "観音寺市役所", type: "codeToName" },

    { question: "三野町", answer: "289", type: "nameToCode" },
    { question: "280", answer: "須田", type: "codeToName" },

    { question: "豊浜", answer: "287", type: "nameToCode" },
    { question: "288", answer: "観音寺東部", type: "codeToName" },

    { question: "高瀬", answer: "282", type: "nameToCode" },
    { question: "286", answer: "大野原", type: "codeToName" },

    { question: "詫間", answer: "281", type: "nameToCode" },
    { question: "283", answer: "山本", type: "codeToName" },

    { question: "観音寺", answer: "285", type: "nameToCode" },
    { question: "345", answer: "観音寺南", type: "codeToName" },

    { question: "山本", answer: "283", type: "nameToCode" },
    { question: "289", answer: "三野町", type: "codeToName" }
];

const writtenTest3 = [
    { question: "宇多津", answer: "265", type: "nameToCode" },
    { question: "262", answer: "坂出東部", type: "codeToName" },

    { question: "財田", answer: "334", type: "nameToCode" },
    { question: "357", answer: "丸亀市役所", type: "codeToName" },

    { question: "善通寺", answer: "273", type: "nameToCode" },
    { question: "329", answer: "丸亀南", type: "codeToName" },

    { question: "駒止", answer: "263", type: "nameToCode" },
    { question: "363", answer: "フジグラン丸亀", type: "codeToName" },

    { question: "満濃", answer: "276", type: "nameToCode" },
    { question: "261", answer: "坂出", type: "codeToName" },

    { question: "城西", answer: "272", type: "nameToCode" },
    { question: "331", answer: "塩屋", type: "codeToName" },

    { question: "東部", answer: "333", type: "nameToCode" },
    { question: "328", answer: "丸亀東", type: "codeToName" },

    { question: "飯山", answer: "264", type: "nameToCode" },
    { question: "324", answer: "坂出市役所", type: "codeToName" },

    { question: "丸亀", answer: "271", type: "nameToCode" },
    { question: "274", answer: "琴平", type: "codeToName" },

    { question: "多度津", answer: "275", type: "nameToCode" }
];

const writtenTest4 = [
    { question: "直島", answer: "231", type: "nameToCode" },
    { question: "242", answer: "土庄", type: "codeToName" },

    { question: "富田", answer: "256", type: "nameToCode" },
    { question: "253", answer: "三本松", type: "codeToName" },

    { question: "国分寺", answer: "229", type: "nameToCode" },
    { question: "230", answer: "空港口", type: "codeToName" },

    { question: "引田", answer: "251", type: "nameToCode" },
    { question: "255", answer: "長尾", type: "codeToName" },

    { question: "端岡", answer: "317", type: "nameToCode" },
    { question: "228", answer: "綾南", type: "codeToName" },

    { question: "津田", answer: "254", type: "nameToCode" },
    { question: "252", answer: "白鳥", type: "codeToName" },

    { question: "内海", answer: "241", type: "nameToCode" },
    { question: "318", answer: "浅野", type: "codeToName" },

    { question: "土庄", answer: "242", type: "nameToCode" },
    { question: "229", answer: "国分寺", type: "codeToName" }
];

const writtenTest5 = [
    { question: "高松駅前", answer: "206", type: "nameToCode" },
    { question: "218", answer: "木太", type: "codeToName" },

    { question: "栗林", answer: "202", type: "nameToCode" },
    { question: "203", answer: "東", type: "codeToName" },

    { question: "宮脇", answer: "211", type: "nameToCode" },
    { question: "101", answer: "本店", type: "codeToName" },

    { question: "瓦町", answer: "210", type: "nameToCode" },
    { question: "302", answer: "ゆめタウン高松", type: "codeToName" },

    { question: "桜町", answer: "214", type: "nameToCode" },
    { question: "212", answer: "松福", type: "codeToName" },

    { question: "西", answer: "204", type: "nameToCode" },
    { question: "207", answer: "県庁", type: "codeToName" },

    { question: "鶴尾", answer: "303", type: "nameToCode" },
    { question: "205", answer: "田町", type: "codeToName" },

    { question: "ゆめタウン高松", answer: "302", type: "nameToCode" },
    { question: "201", answer: "高松", type: "codeToName" },

    { question: "本店", answer: "101", type: "nameToCode" },
    { question: "213", answer: "中央市場", type: "codeToName" },

    { question: "東", answer: "203", type: "nameToCode" },
    { question: "208", answer: "高松市役所", type: "codeToName" },

    { question: "県庁", answer: "207", type: "nameToCode" }
];

const writtenTest6 = [
    { question: "徳島", answer: "661", type: "nameToCode" },
    { question: "605", answer: "西条", type: "codeToName" },

    { question: "伊野", answer: "633", type: "nameToCode" },
    { question: "501", answer: "福岡", type: "codeToName" },

    { question: "鳴門", answer: "662", type: "nameToCode" },
    { question: "601", answer: "松山", type: "codeToName" },

    { question: "西条", answer: "605", type: "nameToCode" },
    { question: "661", answer: "徳島", type: "codeToName" },

    { question: "高知", answer: "631", type: "nameToCode" },
    { question: "602", answer: "新居浜", type: "codeToName" },

    { question: "三島", answer: "603", type: "nameToCode" },
    { question: "663", answer: "徳島北", type: "codeToName" }
];

const writtenTest7 = [
    { question: "総社", answer: "477", type: "nameToCode" },
    { question: "461", answer: "広島", type: "codeToName" },

    { question: "玉野", answer: "474", type: "nameToCode" },
    { question: "471", answer: "岡山", type: "codeToName" },

    { question: "大元", answer: "478", type: "nameToCode" },
    { question: "479", answer: "岡山駅西口", type: "codeToName" },

    { question: "庭瀬", answer: "480", type: "nameToCode" },
    { question: "475", answer: "児島", type: "codeToName" },

    { question: "清輝橋", answer: "472", type: "nameToCode" },
    { question: "478", answer: "大元", type: "codeToName" },

    { question: "倉敷", answer: "476", type: "nameToCode" },
    { question: "481", answer: "岡山南", type: "codeToName" },

    { question: "水島", answer: "473", type: "nameToCode" },
    { question: "462", answer: "福山", type: "codeToName" }
];

const writtenTest8 = [
    { question: "北大阪", answer: "446", type: "nameToCode" },
    { question: "452", answer: "姫路", type: "codeToName" },

    { question: "九条", answer: "443", type: "nameToCode" },
    { question: "421", answer: "名古屋", type: "codeToName" },

    { question: "加古川", answer: "455", type: "nameToCode" },
    { question: "447", answer: "南大阪", type: "codeToName" },

    { question: "東大阪", answer: "445", type: "nameToCode" },
    { question: "455", answer: "加古川", type: "codeToName" },

    { question: "東京", answer: "401", type: "nameToCode" },
    { question: "451", answer: "神戸", type: "codeToName" },

    { question: "明石", answer: "453", type: "nameToCode" },
    { question: "441", answer: "大阪", type: "codeToName" },

    { question: "新宿", answer: "402", type: "nameToCode" },
    { question: "401", answer: "東京", type: "codeToName" }
];

// =======================
// 状態管理
// =======================

let questions = [];
let currentIndex = 0;
let correctCount = 0;
let correctAnswers = [];
let mistakes = [];

let selectedTest = null; // テストモード用


// =======================
// 画面切り替え
// =======================

normalModeBtn.addEventListener("click", () => {
    modeScreen.classList.add("hidden");
    normalScreen.classList.remove("hidden");
});

testModeBtn.addEventListener("click", () => {
    modeScreen.classList.add("hidden");
    testScreen.classList.remove("hidden");
});


// =======================
// テストモード：テスト選択
// =======================

testButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedTest = btn.dataset.test;
        alert(`「${btn.textContent}」を選択しました`);
    });
});


// =======================
// テストモード：テスト開始
// =======================

startTestBtn.addEventListener("click", () => {
    if (!selectedTest) {
        alert("テストを選択してください");
        return;
    }

    // テストデータ読み込み
    if (selectedTest === "test1") questions = writtenTest1;
    if (selectedTest === "test2") questions = writtenTest2;
    if (selectedTest === "test3") questions = writtenTest3;
    if (selectedTest === "test4") questions = writtenTest4;
    if (selectedTest === "test5") questions = writtenTest5;
    if (selectedTest === "test6") questions = writtenTest6;
    if (selectedTest === "test7") questions = writtenTest7;
    if (selectedTest === "test8") questions = writtenTest8;

    currentIndex = 0;
    correctCount = 0;
    correctAnswers = [];
    mistakes = [];

    testScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestionWritten();
});


// =======================
// 通常モード：テスト開始
// =======================

startBtn.addEventListener("click", startQuiz);


// =======================
// 通常モードの問題表示
// =======================

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

    normalScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestionNormal();
}


// =======================
// 通常モード：問題表示
// =======================

function showQuestionNormal() {
    const currentQuestion = questions[currentIndex];
    const mode = document.querySelector('input[name="mode"]:checked').value;

    progress.textContent = `問題 ${currentIndex + 1} / ${questions.length}`;

    if (mode === "nameToCode") {
        questionTitle.textContent = "支店名 / 出張所名";
        question.innerHTML = `
            ${currentQuestion.name}<br>
            <span style="font-size:0.95rem; color:#64748b;">（${currentQuestion.kana}）</span>
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


// =======================
// テストモード：問題表示（交互形式）
// =======================

function showQuestionWritten() {
    const q = questions[currentIndex];

    progress.textContent = `問題 ${currentIndex + 1} / ${questions.length}`;

    if (q.type === "nameToCode") {
        questionTitle.textContent = "この支店名の支店番号は？";
        question.textContent = q.question;
        answerInput.placeholder = "店番を入力";
    } else {
        questionTitle.textContent = "この支店番号の支店名は？";
        question.textContent = q.question;
        answerInput.placeholder = "支店名を入力";
    }

    answerInput.value = "";
    answerInput.focus();
}


// =======================
// 回答処理（通常モード & テストモード共通）
// =======================

submitBtn.addEventListener("click", submitAnswer);

function submitAnswer() {
    const isWrittenMode = selectedTest !== null;

    if (isWrittenMode) {
        submitAnswerWritten();
    } else {
        submitAnswerNormal();
    }
}


// =======================
// 通常モード：回答処理
// =======================

function submitAnswerNormal() {
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

        const rawName = normalizedName.replace(/支店|出張所/g, "");
        const rawKana = normalizedKana.replace(/してん|しゅっちょうしょ/g, "");

        isCorrect =
            normalizedAnswer === normalizedName ||
            normalizedAnswer === normalizedKana ||
            normalizedAnswer === rawName ||
            normalizedAnswer === rawKana;
    }

    if (isCorrect) {
        correctCount++;
        correctAnswers.push(currentQuestion);
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
        showQuestionNormal();
    }
}


// =======================
// テストモード：回答処理
// =======================

function submitAnswerWritten() {
    const q = questions[currentIndex];
    const answer = answerInput.value.trim();
    if (answer === "") return;

    let isCorrect = false;

    if (q.type === "nameToCode") {
        isCorrect = answer === q.answer;
    } else {
        const normalized = answer.replace(/\s+/g, "").toLowerCase();
        const normalizedAnswer = q.answer.replace(/\s+/g, "").toLowerCase();
        isCorrect = normalized === normalizedAnswer;
    }

    if (isCorrect) {
        correctCount++;
        correctAnswers.push(q);
    } else {
        mistakes.push({
            question: q.question,
            correct: q.answer,
            user: answer,
            type: q.type
        });
    }

    currentIndex++;

    if (currentIndex >= questions.length) {
        showResult();
    } else {
        showQuestionWritten();
    }
}


// =======================
// 結果画面
// =======================

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const percentage = Math.round((correctCount / questions.length) * 100);

    score.textContent = `${questions.length}問中 ${correctCount}問正解`;
    rate.textContent = `正答率 ${percentage}%`;

    correctList.innerHTML = "";
    mistakeList.innerHTML = "";

    const isWrittenMode = selectedTest !== null;

    if (isWrittenMode) {
        correctAnswers.forEach(c => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${c.question}</strong> → ${c.answer}`;
            correctList.appendChild(li);
        });

        mistakes.forEach(m => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${m.question}</strong><br>
                あなたの回答：<span style="color:#ef4444;">${m.user}</span><br>
                正解：${m.correct}
            `;
            mistakeList.appendChild(li);
        });

    } else {
        correctAnswers.forEach(correct => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${correct.name}</strong> → ${correct.code}`;
            correctList.appendChild(li);
        });

        mistakes.forEach(mistake => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${mistake.name}</strong><br>
                あなたの回答：<span style="color:#ef4444;">${mistake.answer}</span><br>
                正解：${mistake.code}
            `;
            mistakeList.appendChild(li);
        });
    }
}


// =======================
// その他の機能
// =======================

restartBtn.addEventListener("click", () => {
    if (selectedTest) {
        currentIndex = 0;
        correctCount = 0;
        correctAnswers = [];
        mistakes = [];
        quizScreen.classList.remove("hidden");
        resultScreen.classList.add("hidden");
        showQuestionWritten();
    } else {
        startQuiz();
    }
});

homeBtn.addEventListener("click", () => {
    selectedTest = null;
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    branchListScreen.classList.add("hidden");
    modeScreen.classList.remove("hidden");
});

retryMistakeBtn.addEventListener("click", () => {
    if (mistakes.length === 0) return;

    if (selectedTest) {
        questions = mistakes.map(m => ({
            question: m.question,
            answer: m.correct,
            type: m.type
        }));
    } else {
        questions = mistakes.map(m => ({
            code: m.code,
            name: m.name,
            kana: m.kana
        }));
    }

    currentIndex = 0;
    correctCount = 0;
    correctAnswers = [];
    mistakes = [];

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    if (selectedTest) showQuestionWritten();
    else showQuestionNormal();
});

branchListBtn.addEventListener("click", showBranchList);
branchListBtn2.addEventListener("click", showBranchList);

function showBranchList() {
    normalScreen.classList.add("hidden");
    testScreen.classList.add("hidden");
    modeScreen.classList.add("hidden");
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

backHomeBtn.addEventListener("click", () => {
    branchListScreen.classList.add("hidden");
    modeScreen.classList.remove("hidden");
});

giveUpBtn.addEventListener("click", () => {
    if (currentIndex === 0) {
        homeBtn.click();
        return;
    }
    if (confirm("ここまでの回答でテストを終了し、結果を表示しますか？")) {
        questions = questions.slice(0, currentIndex);
        showResult();
    }
});

const backModeBtn = document.getElementById("back-mode-btn");
const backModeBtn2 = document.getElementById("back-mode-btn2");

backModeBtn.addEventListener("click", () => {
    normalScreen.classList.add("hidden");
    testScreen.classList.add("hidden");
    branchListScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    modeScreen.classList.remove("hidden");
    selectedTest = null;
});

backModeBtn2.addEventListener("click", () => {
    normalScreen.classList.add("hidden");
    testScreen.classList.add("hidden");
    branchListScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    modeScreen.classList.remove("hidden");
    selectedTest = null;
});

backHomeBtn.addEventListener("click", () => {
    branchListScreen.classList.add("hidden");
    modeScreen.classList.remove("hidden");
});
// トップ画面が消えたらモード画面を表示
setTimeout(() => {
    document.getElementById("top-screen").classList.add("hidden");
    document.getElementById("mode-screen").classList.remove("hidden");
}, 2500); // 2.5秒後に切り替え
