
import { QuestionPropsType, ResultType } from '../../../types/question'

type RadioQuestionType = {
    question: QuestionPropsType,
}
const CheckboxQuestion = (props:RadioQuestionType) => {
  
    function handleClick(questionId: number, answerId: number){
        const result:ResultType[] = JSON.parse(localStorage.getItem("result") || "[]");
        let isExist = false;

        result.forEach((value:ResultType) => {
            if(value.questionId == questionId) {
                if(value.answerId.includes(answerId)) {
                  value.answerId.splice(value.answerId.indexOf(answerId), 1);
                } else {
                  value.answerId.push(answerId);
                }
                isExist = true;
            }
        });

        if(!isExist) {
            result.push({questionId: questionId, answerId: [answerId]});
        }

        localStorage.setItem("result", JSON.stringify(result));
    }

  return (
    <>
        {
           props.question.question.answers.map((answer, index) => (
            <div key={index} className="checkbox-question-item">
                <input onClick={() => handleClick(props.question.question.id, answer.id)} type="checkbox" id={`checkbox-${answer.id}`} name={`checkbox-${props.question.question.id}`} value={answer.id} />
                <label htmlFor={`checkbox-${answer.id}`}>{answer.answer}</label>
            </div>))
        }
    </>
  )
}

export default CheckboxQuestion
