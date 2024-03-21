import { useState } from 'react'


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Stats = ({good, neutral, bad}) => {
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodFeedback = () => {
    setGood(good + 1)
  }

  const addNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const addBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGoodFeedback} text={'good'}/>
      <Button handleClick={addNeutralFeedback} text={'neutral'}/>
      <Button handleClick={addBadFeedback} text={'bad'}/>
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
