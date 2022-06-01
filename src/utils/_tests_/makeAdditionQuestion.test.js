const makeAdditionQuestion = require("../makeAdditionQuestion");

describe("makeAdditionQuestion", () => {
  test("returns an object", () => {
    const result = makeAdditionQuestion();

    expect(typeof result).toBe("object");
    expect(Array.isArray(result)).toBe(false);
  });
  test("returned object has answerString property with string value", () => {
    const result = makeAdditionQuestion();
    const { questionString } = result;

    expect(typeof questionString).toBe("string");
  });
  test("answerString is of correct format", () => {
    for (let i = 0; i < 100; i++) {
      const result = makeAdditionQuestion();
      const { questionString } = result;
      const regex = /^[0-9]{1,2} \+ [0-9]{1,2} =$/;
      const isCorrectFormat = regex.test(questionString);

      expect(isCorrectFormat).toBe(true);
    }
  });
  test("returned object has answer property with a number value", () => {
    const result = makeAdditionQuestion();
    const { answer } = result;

    expect(typeof answer).toBe("number");
  });
  test("returned answer solves the answerString", () => {
    const result = makeAdditionQuestion();
    const { questionString, answer } = result;
    const regex = /[0-9]{1,2}/g;

    const [firstNum, secondNum] = questionString.match(regex);
    const expectedAnswer = parseInt(firstNum) + parseInt(secondNum);

    expect(answer).toEqual(expectedAnswer);
  });
});
