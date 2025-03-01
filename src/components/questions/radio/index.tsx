import { QuestionPropsType, ResultType } from '../../../types/question'

type RadioQuestionType = {
    question: QuestionPropsType,
}
const RadioQuestion = (props:RadioQuestionType) => {

    function handleClick(questionId: number, answerId: number){
        const result:ResultType[] = JSON.parse(localStorage.getItem("result") || "[]");

        result.forEach((value:ResultType, index) => {
            if(value.questionId == questionId) {
                result.splice(index, 1);
            }
        });

        result.push({
            questionId: questionId,
            answerId: [answerId],
        })

        localStorage.setItem("result", JSON.stringify(result));
    }


  return (
    <>
        {
            props.question.question.answers.map((answer, index) => (
                <div key={index} className="radio-question-item">
                    <input onClick={() => handleClick(props.question.question.id, answer.id)} type="radio" id={`radio-${answer.id}`} name={`radio-${props.question.question.id}`} value={answer.id} />
                    <label htmlFor={`radio-${answer.id}`}>{answer.answer}</label>
                </div>
            ))
        }
    </>
  )
}

export default RadioQuestion
