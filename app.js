const p1Button = document.querySelector("#p1Btn");
const p2Button = document.querySelector("#p2Btn");
const p1Disp = document.querySelector("#p1Disp");
const p2Disp = document.querySelector("#p2Disp");
const resetBtn = document.querySelector("#resetBtn");

const scoreSelect = document.querySelector("select");

let p1Score = 0;
let p2Score = 0;

let winScore = 1;
let isGameOver = false;

function resetScore() {
    p1Score = p2Score = 0;
    isGameOver = false;
    p1Disp.textContent = p1Score;
    p2Disp.textContent = p2Score;
    p1Disp.classList.remove("has-text-success", "has-text-danger");
    p2Disp.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = p2Button.disabled = false;
}

resetBtn.addEventListener("click", resetScore);

scoreSelect.addEventListener("change", () => {
    winScore = parseInt(scoreSelect.value);
    resetScore();
});

p1Button.addEventListener("click", () => {
    if (isGameOver) { return }
    ++p1Score;
    p1Disp.textContent = p1Score;
    if (p1Score >= winScore) {
        isGameOver = true;
        p1Disp.classList.add("has-text-success");
        p2Disp.classList.add("has-text-danger");
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

p2Button.addEventListener("click", () => {
    if (isGameOver) { return }
    ++p2Score;
    p2Disp.textContent = p2Score;
    if (p2Score >= winScore) {
        isGameOver = true;
        p1Disp.classList.add("has-text-danger");
        p2Disp.classList.add("has-text-success");
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});