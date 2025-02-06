
import { QuestionPropsType } from '../../../types/question'

type RadioQuestionType = {
    question: QuestionPropsType,
}
const CheckboxQuestion = (props:RadioQuestionType) => {
  
  return (
    <>
        {
           props.question.question.answers.map((answer, index) => (
            <div key={index} className="checkbox-question-item">
                <input type="checkbox" id={`checkbox-${answer.id}`} name={`checkbox-${props.question.question.id}`} value={answer.id} />
                <label htmlFor={`checkbox-${answer.id}`}>{answer.answer}</label>
            </div>))
        }
    </>
  )
}

export default CheckboxQuestion
