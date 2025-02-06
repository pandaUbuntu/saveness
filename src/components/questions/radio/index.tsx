import { QuestionPropsType } from '../../../types/question'

type RadioQuestionType = {
    question: QuestionPropsType,
}
const RadioQuestion = (props:RadioQuestionType) => {
  

  return (
    <>
        {
            props.question.question.answers.map((answer, index) => (
                <div key={index} className="radio-question-item">
                    <input type="radio" id={`radio-${answer.id}`} name={`radio-${props.question.question.id}`} value={answer.id} />
                    <label htmlFor={`radio-${answer.id}`}>{answer.answer}</label>
                </div>
            ))
        }
    </>
  )
}

export default RadioQuestion
