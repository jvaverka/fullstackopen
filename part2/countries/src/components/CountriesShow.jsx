const CountriesShow = ({ country, showCountry }) => {
  return (
    <>
      <button onClick={() => {showCountry(country)}}>show</button>
    </>
  )
}

export default CountriesShow
