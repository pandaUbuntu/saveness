import { useState } from 'react'
import './App.css'
import Question from './components/questions'
import { list } from './fixtures/questionFixtures'
import Header from './components/header'


function App() {
  return (
    <>
      <Header />
      <div className="result-page-wrapper">
        {
          list.map((question, index) => (
            <Question key={question.id} order={index + 1} question={question} />
          ))
        }
        <a href="/result" ><button className="green-button success-button">Перевірити</button></a>

      </div>
      
    </>
  )
}

export default App
