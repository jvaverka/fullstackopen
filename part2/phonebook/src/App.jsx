import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('please enter a name...')
  const [newNumber, setNewNumber] = useState('0')

  const handleNewPerson = (event) => {
    event.preventDefault()
    let personExists = persons.find((person) => {
      return person.name === newName
    })

    if (personExists) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('enter a new name...')
      setNewNumber('0')
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div> name: <input id={newName} value={newName} onChange={handleNewName} /></div>
        <div>number: <input id={newNumber} value={newNumber} onChange={handleNewNumber} /></div>
        <div><button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>

  )
}

export default App
