import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Display = ({type, sum,text}) => {
  
  return (
    <div>
      <p>{type} {sum} {text}</p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text='good'/>
      <Button onClick={increaseNeutral} text='neutral'/>
      <Button onClick={increaseBad} text='bad'/>
      <h1>statistics</h1>
      <Display type='good' sum={good}/>
      <Display type='neutral' sum={neutral}/>
      <Display type='bad' sum={bad}/>
      <Display type='all' sum={good + neutral + bad}/>
      <Display type='average' sum={(good + neutral + bad)/3}/>
      <Display  type='positive' sum={(good/(good + neutral + bad))*100} text='%'/>   
    </div>
  )
}

export default App