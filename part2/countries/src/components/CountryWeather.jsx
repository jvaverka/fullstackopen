import { useEffect, useState } from "react";
import countryServices from '../services/countries'

const CountryWeather = ({ capital }) => {
  const [temp, setTemp] = useState('');
  const [conditions, setConditions] = useState('');
  const [wind, setWind] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    countryServices.getWeather(capital)
      .then(response => {
        setTemp(response.temp);
        setConditions(response.conditions);
        setWind(response.wind);
        setIcon(response.icon);
      })
  }, [])

  return (
    <>
      <h2>Weather in {capital}</h2>
      <p>temperature {temp} Celcius</p>
      <p>{conditions} {icon}</p>
      <p>wind {wind} kmph</p>
    </>
  )
}

export default CountryWeather
