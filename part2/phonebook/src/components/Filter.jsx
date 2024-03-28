const Filter = ({ filterValue, handleFilterValue }) => {
  return (
    <>
      filter shown with <input value={filterValue} onChange={handleFilterValue} />
    </>
  )
}

export default Filter
