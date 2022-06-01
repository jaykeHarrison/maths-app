function makeDivideQuestion() {
  const secondNum = Math.ceil(Math.random() * 10);
  const answer = Math.ceil(Math.random() * 10);
  const firstNum = secondNum * answer;

  const answerString = `${firstNum} ÷ ${secondNum} =`;

  return { answerString, answer };
}

module.exports = makeDivideQuestion;
