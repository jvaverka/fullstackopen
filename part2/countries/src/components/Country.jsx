const Country = ({ country }) => {
  if (!country) {
    return null
  }

  const langs = Object.values(country.languages)

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {langs.map((lang) =>
          <li key={lang}>{lang}</li>
        )}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </>
  )
}

export default Country
