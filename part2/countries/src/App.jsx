import { useState, useEffect } from 'react'
import countryServices from './services/countries'
import Input from './components/Input'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)

  const onChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  const showCountry = (countryData) => {
    setCountries([countryData])
    setCountry(countryData)
  }

  useEffect(() => {
    if (value !== '') {
      countryServices
        .getAll()
        .then(response => {
          const matches = response.filter((curr) => {
            const commonName = curr.name.common.toLowerCase()
            return commonName.includes(value.toLowerCase());
          })
          if (matches.length === 0) {
            setCountries(null)
            setCountry(null)
          } else if (matches.length === 1) {
            setCountries(matches)
            const countryMatch = matches[0]
            countryServices
              .getByName(countryMatch.name.common)
              .then(response => {
                setCountry(response)
              })
          } else {
            setCountries(matches)
            setCountry(null)
          }
        })
    } else {
      setCountries(null)
      setCountry(null)
    }
  }, [value])

  return (
    <>
      <Input onChange={onChange} value={value} />
      <Countries countries={countries} showCountry={showCountry} />
      <Country country={country} />
    </>
  )
}

export default App
