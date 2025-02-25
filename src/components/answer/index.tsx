import React from "react"
import './style.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { QuestionPropsType } from '../../types/question'

const AnswerResult = (props:QuestionPropsType) => {

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
            <ul>
              {props.question.answers.map((answer, index) => (
                <li key={index} className={answer.isCorrect ? `green-li` : ``}>
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
