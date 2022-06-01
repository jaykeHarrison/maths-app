const makeDivideQuestion = require("../makeDivideQuestion");

describe("makeDivideQuestion", () => {
  test("returns an object", () => {
    const result = makeDivideQuestion();

    expect(typeof result).toBe("object");
    expect(Array.isArray(result)).toBe(false);
  });
  test("returned object has answerString property with string value", () => {
    const { questionString } = makeDivideQuestion();

    expect(typeof questionString).toBe("string");
  });
  test("returned answerString is of correct format", () => {
    for (let i = 0; i < 2; i++) {
      const { questionString } = makeDivideQuestion();
      const regex = /^[0-9]{1,3} ÷ [0-9]{1,2} =$/;
      const isCorrectFormat = regex.test(questionString);

      expect(isCorrectFormat).toBe(true);
    }
  });
  test("return object has answer property with number value", () => {
    const { answer } = makeDivideQuestion();

    expect(typeof answer).toBe("number");
  });
  test("returned answer solves the answerString", () => {
    for (let i = 0; i < 100; i++) {
      const { questionString, answer } = makeDivideQuestion();
      const regex = /[0-9]{1,3}/g;

      const [firstNum, secondNum] = questionString.match(regex);
      const expectedAnswer = parseInt(firstNum) / parseInt(secondNum);

      expect(answer).toEqual(expectedAnswer);
    }
  });
  test("answer is a whole number", () => {
    for (let i = 0; i < 100; i++) {
      const { answer } = makeDivideQuestion();

      expect(Number.isInteger(answer)).toBe(true);
    }
  });
});
