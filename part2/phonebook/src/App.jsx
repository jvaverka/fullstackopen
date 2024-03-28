import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('please enter a name...')
  const [newNumber, setNewNumber] = useState('0')
  const [filterValue, setFilterValue] = useState('')

  const handleFilterValue = (event) => {
    setFilterValue(event.target.value)
  }

  const peopleToShow = () => {
    if (filterValue !== '') {
      return persons.filter((person) => {
        return person.name.includes(filterValue)
      })
    } else {
      return persons
    }
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    const personExists = persons.find((person) => {
      return person.name === newName
    })

    if (personExists) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
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
      <Filter filterValue={filterValue} handleFilterValue={handleFilterValue} />
      <h3>add a new</h3>
      <PersonForm
        handleNewPerson={handleNewPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={peopleToShow()}/>
    </div>

  )
}

export default App
