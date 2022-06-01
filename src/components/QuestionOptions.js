import { useState } from "react";
import AddQuestionBtn from "./AddQuestionBtn";
import Quantity from "./Quantity";
import TypeOfQuestion from "./TypeOfQuestion";

function QuestionOptions({ setQuestions }) {
  const [questionsToAdd, setQuestionsToAdd] = useState({});
  return (
    <>
      <TypeOfQuestion setQuestionsToAdd={setQuestionsToAdd} />
      <Quantity setQuestionsToAdd={setQuestionsToAdd} />
      <AddQuestionBtn
        questionsToAdd={questionsToAdd}
        setQuestionsToAdd={setQuestionsToAdd}
      />
    </>
  );
}

export default QuestionOptions;
