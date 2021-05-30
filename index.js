const quiz = [
  {
    question: "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "ファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  }, {
    question: "ファイナルファンタジーIVの主人公の名前は？",
    answers: [
      "フリオニール",
      "クラウド",
      "ディーダ",
      "セシル"
    ],
    correct: "セシル"
  }, {
    question: "うなぎパイが有名な都市の名前は？",
    answers: [
      "浜松市",
      "静岡市",
      "名古屋市",
      "大宮市"
    ],
    correct: "浜松市"
  }
];
const quizLength =  quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength =  $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent =  quiz[quizIndex].answers[i];
  }
};

setupQuiz();

const clickHandler = (e) => {
  // 押した選択肢と答えの正誤判定
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }
  
  quizIndex++;
  // 現在何問目かに応じてクイズを終わるか次の問題に進むか判定
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(`終了！あなたの正解数は${score}/${quizLength}です`);
  }
  
};

for (let i = 0; i < buttonLength; i++) {
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}




