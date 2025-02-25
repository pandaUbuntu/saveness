import React from "react"
import './style.css'
import AnswerResult from "../../answer"
import { list } from "../../../fixtures/questionFixtures"

const ResultPage = () => {

  return (
    <>
        {
            list.map((question, index) => {
                return (
                    <AnswerResult key={index} order={index} question={question} />
                )
            })
        }
    </>
  )
}

export default ResultPage
