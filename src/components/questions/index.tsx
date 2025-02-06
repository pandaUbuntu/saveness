import { QuestionPropsType, QuestionType } from '../../types/question'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RadioQuestion from './radio';
import CheckboxQuestion from './checkbox';
import { Check } from '@mui/icons-material';
import "./style.css"
import style from "./style.module.css"


const Question = (props:QuestionPropsType) => {
  
  return (
    <>
        <Accordion defaultExpanded style={{ backgroundColor: '#3d3d3c', color: '#b9b5b5' }}>
        <AccordionSummary
          style={{ fontWeight: 900 }}
          expandIcon={<ArrowDropDownIcon style={{ color: '#b9b5b5' }}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">{props.order}. {props.question.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {
                props.question.type === QuestionType.Checkbox ?
                    <CheckboxQuestion question={props}/>
                    :
                    <RadioQuestion question={props}/>

            }
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Question
