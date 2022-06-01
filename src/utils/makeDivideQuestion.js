function makeDivideQuestion() {
  const secondNum = Math.ceil(Math.random() * 10);
  const answer = Math.ceil(Math.random() * 10);
  const firstNum = secondNum * answer;

  const questionString = `${firstNum} ÷ ${secondNum} =`;

  return { questionString, answer };
}

module.exports = makeDivideQuestion;
