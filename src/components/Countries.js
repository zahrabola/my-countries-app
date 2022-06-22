import React, { useState, useEffect } from "react";
//https://restcountries.com/#api-endpoints-v3-all
const url = "https://restcountries.com/v2/all";
const Countries = () => {
const [countries, setCountries ] = useState([])


    const fetchCountriesData = async() => {
        const response = await fetch (url)
        const countries = await response.json ()
        setCountries(countries)
        console.log(countries);
    }
useEffect(() => {
fetchCountriesData()
}, []);


    return (
      <div className="Grid">
        {countries.map((country) => {
          const {
            name,
            capital,
            nativeName,
            region,
            flag,
            population,
            numericCode,
            timezones,
            callingCodes,

          } = country;
          return (
            <article key={numericCode}>
              <div>
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>
                <div className="datails">
                  <div className="Name">
                    <h2>{name}</h2>
                    <h3>{nativeName}</h3>
                    <p>Capital City:</p> <h4>{capital}</h4>
                  </div>
                  <p>Region: {region}</p>
                  <p>population: {population.toLocaleString()}</p>
                  <p>Calling Code: {callingCodes}</p>
                  <p>Timezones: {timezones}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    )
    
    }

export default Countries 