import { useEffect, useState } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Filter from './components/Filter'
import Notification from './components/Notification.jsx'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('please enter a name...')
  const [newNumber, setNewNumber] = useState('0')
  const [filterValue, setFilterValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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

  const removePerson = (personId) => {
    const personExists = persons.find((person) => {
      return person.id === personId
    })
    if (!personExists) {
      alert(`Cannot find person with id ${personId}`)
    } else if (window.confirm(`Delete ${personExists.name} ?`)) {
      personService
        .remove(personExists.id)
        .then(() => {
          const validPersons = persons.filter((person) => {
            return person.id !== personExists.id
          })
          setPersons(validPersons)
        })
    }
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    const personExists = persons.find((person) => {
      return person.name === newName
    })

    if (personExists) {
      const updatePerson = window.confirm((`${newName} is already added to the phonebook, replace the old number with a new one?`))
      if (updatePerson) {
        const newPerson = {
          ...personExists,
          number: newNumber,
        }
        personService
          .update(newPerson)
          .then(returnedPerson => {
            const unchangedPersons = persons.filter((person) => {
              return person.id !== returnedPerson.id
            })
            setPersons(unchangedPersons.concat(returnedPerson))
            setNewName('enter a new name...')
            setNewNumber('404-867-5309')
          })
          .then(() => {
            setErrorMessage(`Updated ${newPerson.name}`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(`Failed to update ${newPerson.name}: ${error}`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: (persons.length + 1).toString()
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('enter a new name...')
          setNewNumber('404-867-5309')
        })
        .then(() => {
          setErrorMessage(`Added ${newPerson.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`Failed to add ${newPerson.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
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
      <Notification message={errorMessage} />
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
      <Persons persons={peopleToShow()} removePerson={removePerson} />
    </div>

  )
}

export default App
