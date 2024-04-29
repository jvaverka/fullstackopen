import CountriesShow from "./CountriesShow"

const Countries = ({ countries, showCountry }) => {
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
          <li key={curr.name.common}>
            {curr.name.common} <CountriesShow showCountry={showCountry} country={curr}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default Countries
