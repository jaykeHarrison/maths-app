const makeMultiplyQuestion = require("../makeMultiplyQuestion.js");

describe("makeMultiplyQuestion", () => {
  test("returns an object", () => {
    const result = makeMultiplyQuestion();

    expect(typeof result).toBe("object");
    expect(Array.isArray(result)).toBe(false);
  });
  test("returned object has answerString property with string value", () => {
    const { questionString } = makeMultiplyQuestion();

    expect(typeof questionString).toBe("string");
  });
  test("returned answerString is of correct format", () => {
    for (let i = 0; i < 100; i++) {
      const { questionString } = makeMultiplyQuestion();
      const regex = /^[0-9]{1,2} x [0-9]{1,2} =$/;
      const isCorrectFormat = regex.test(questionString);

      expect(isCorrectFormat).toBe(true);
    }
  });
  test("returned object has answer property with number value", () => {
    const { answer } = makeMultiplyQuestion();

    expect(typeof answer).toBe("number");
  });
  test("returned answer solves the question", () => {
    for (let i = 0; i < 100; i++) {
      const { questionString, answer } = makeMultiplyQuestion();
      const regex = /[0-9]{1,2}/g;

      const [firstNum, secondNum] = questionString.match(regex);
      const expectedAnswer = parseInt(firstNum) * parseInt(secondNum);

      expect(answer).toEqual(expectedAnswer);
    }
  });
});
