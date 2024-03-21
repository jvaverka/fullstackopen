import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const zeros = new Uint8Array(anecdotes.length)
  const [votes, setVotes] = useState(zeros)
  const getRandomInt = (max) => Math.floor(Math.random() * max)
  const handleNext = () => setSelected(getRandomInt(anecdotes.length))
  const handleVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }
  const mostVotes = () => Math.max(...votes)
  const anecdoteWithMostVotes = () => {
    const anecdoteIndex = votes.findIndex(vote => vote === mostVotes())
    return anecdotes[anecdoteIndex]
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      {anecdoteWithMostVotes()}
      <br />
      has {mostVotes()} votes
    </div>
  )
}

export default App
