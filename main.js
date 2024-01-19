//랜덤 번호 지정
//유저 번호 입력 그리고 go 버튼 누름
//만약 유저가 맞추면 성고 랜덤번호 < 유저번호 down 랜덤번호>유저번호 up
//reset버튼 누르면 게임 리셋
//5번 기회 부여 실패시 disabled
//유저가 1과 100 밖의 범위 입력시 기회박탈 없이 재시도
// 같은 번호를 입력하면 기회 박탈 없이 재시도

let goButton = document.getElementById("go-button");
let userInput = document.getElementById("user-input");
let answerHint = document.getElementById("answer-hint");
let userChance = document.getElementById("user-chance");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let number = randomNumber();
let history = [];
goButton.disabled = false;
console.log(number);

//eventlistener
goButton.addEventListener("click", go);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function go() {
  let userInputNum = userInput.value;
  if (userInputNum < 1 || userInputNum > 100) {
    answerHint.textContent = "1부터 100사이 숫자를 입력하세요";
    return;
  }

  if (history.includes(userInputNum) == true) {
    answerHint.textContent = "이미 입력하신 숫자입니다";
    return;
  }

  chances--;
  userChance.textContent = `남은 기회: ${chances}`;

  if (userInputNum < number) {
    answerHint.textContent = "UP!!";
  } else if (userInputNum > number) {
    answerHint.textContent = "DOWN!!";
  } else {
    answerHint.textContent = "성공!!!";
  }

  history.push(userInputNum);
  console.log(history);

  if (chances == 0) {
    goButton.disabled = true;
  }
}

function reset() {
  goButton.disabled = false;
  chances = 5;
  userChance.textContent = `남은 기회: ${chances}`;
}
