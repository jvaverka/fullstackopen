const PersonRemoveButton = ({ personId, removePerson }) => {
  return (
    <>
      <button type="button" onClick={() => removePerson(personId)}>delete</button>
    </>
  )
}

export default PersonRemoveButton
