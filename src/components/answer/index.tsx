import React from "react"
import './style.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { QuestionPropsType, ResultType, Question } from '../../types/question'
import Header from "../header"

const AnswerResult = (props:QuestionPropsType) => {

  function getAnswerResult(question: Question, answerId: number, isCorrect: boolean):string  {
    const result:ResultType[] = JSON.parse(localStorage.getItem("result") || "[]");

    const obj = result.find(questionTmp => questionTmp.questionId === question.id)

    if(obj){
      if (obj.questionId === question.id) {
        if(obj.answerId.find(answerTmp => answerTmp === answerId) && isCorrect){
          return 'green-li-bold'
        }
        else if (isCorrect){
          return 'green-li'
        }
        else if(obj.answerId.find(answerTmp => answerTmp === answerId)){
          return 'red-li'
        }
      } 
    }

    return "";
  }

  return (
    <>
        <Accordion defaultExpanded style={{ backgroundColor: '#3d3d3c', color: '#b9b5b5' }}>
        <AccordionSummary
          style={{ fontWeight: 900 }}
          expandIcon={<ArrowDropDownIcon style={{ color: '#b9b5b5' }}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">{props.question.id}. {props.question.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul className="ul-result">
              {props.question.answers.map((answer, index) => (
                <li key={index} className={getAnswerResult(props.question, answer.id, answer.isCorrect)}>
                  {answer.answer}
                </li>
              ))}
            </ul>
            
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AnswerResult
