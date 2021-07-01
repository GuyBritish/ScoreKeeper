const p1 = {
    score: 0,
    btn: document.querySelector("#p1Btn"),
    disp: document.querySelector("#p1Disp")
}

const p2 = {
    score: 0,
    btn: document.querySelector("#p2Btn"),
    disp: document.querySelector("#p2Disp")
}

const resetBtn = document.querySelector("#resetBtn");
const scoreSelect = document.querySelector("select");

let p1Score = 0;
let p2Score = 0;

let winScore = 1;
let isGameOver = false;

function updateScores(winner, loser) {
    ++winner.score;
    winner.disp.textContent = winner.score;
    if (winner.score >= winScore) {
        isGameOver = true;
        winner.disp.classList.add("has-text-success");
        loser.disp.classList.add("has-text-danger");

        winner.btn.disabled = true;
        loser.btn.disabled = true;
    }
}

function resetScore() {
    p1.score = p2.score = 0;
    isGameOver = false;
    p1.disp.textContent = p1.score;
    p2.disp.textContent = p2.score;
    p1.disp.classList.remove("has-text-success", "has-text-danger");
    p2.disp.classList.remove("has-text-success", "has-text-danger");
    p1.btn.disabled = p2.btn.disabled = false;
}

resetBtn.addEventListener("click", resetScore);

scoreSelect.addEventListener("change", () => {
    winScore = parseInt(scoreSelect.value);
    resetScore();
});

p1.btn.addEventListener("click", () => {
    if (isGameOver) { return; }
    updateScores(p1, p2);
});

p2.btn.addEventListener("click", () => {
    if (isGameOver) { return; }
    updateScores(p2, p1);
});