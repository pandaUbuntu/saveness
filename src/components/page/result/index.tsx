import React from "react"
import './style.css'
import AnswerResult from "../../answer"
import { list } from "../../../fixtures/questionFixtures"
import Header from "../../header"

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("result") || "[]")

  return (
    <>
      <Header />
        <div className="result-page-wrapper">
          {
              list.map((question, index) => {
                  return (
                      <AnswerResult key={index} order={index} question={question} />
                  )
              })
          }
        </div>
        
    </>
  )
}

export default ResultPage
