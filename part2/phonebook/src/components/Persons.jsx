import PersonRemoveButton from "./PersonRemoveButton"

const Persons = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((person) =>
        <li key={person.id}>
          {person.name} {person.number} <PersonRemoveButton personId={person.id} removePerson={removePerson} />
        </li>)
      }
    </ul>
  )
}

export default Persons
