import { useState } from 'react'
import './App.css'
import Question from './components/questions'
import { list } from './fixtures/questionFixtures'


function App() {
  return (
    <>
      {
        list.map((question, index) => (
          <Question key={question.id} order={index + 1} question={question} />
        ))
      }
      <a href="/result" ><button className="green-button success-button">Перевірити</button></a>
    </>
  )
}

export default App
