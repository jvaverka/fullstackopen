const PersonForm = (props) => {
  const { handleNewPerson, newName, handleNewName, newNumber, handleNewNumber } = props
  return (
    <form onSubmit={handleNewPerson}>
      <div> name: <input id={newName} value={newName} onChange={handleNewName} /></div>
      <div>number: <input id={newNumber} value={newNumber} onChange={handleNewNumber} /></div>
      <div><button type="submit">add</button> </div>
    </form>
  )
}

export default PersonForm
