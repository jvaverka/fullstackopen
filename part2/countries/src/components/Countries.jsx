const Countries = ({ countries }) => {
  if (!countries) {
    return null
  } else if (countries.length === 1) {
    return null
  } else if (countries.length > 10) {
    return (
      <>
        <p>Too many matches, specify another filter</p>
      </>
    )
  }

  return (
    <>
      <ul>
        {countries.map((curr) =>
          <li key={curr.name.common}>{curr.name.common}</li>
        )}
      </ul>
    </>
  )
}

export default Countries
