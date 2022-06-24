import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
////////////////////////////////////////////

 const removeCountry = (numericCode) => {
  const newCountry = countries.filter((country) => country.numericCode !== numericCode)
  setCountries(newCountry)
}

    return (
      <div className="Gridcountries">
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
                <div className="details">
                  <div className="Name">
                    <h2>{name}</h2>
                    <h3 className="native">{nativeName}</h3>
                    <p>Capital City:</p> <h4>{capital}</h4>
                  </div>
                  <p>Region: {region}</p>
                  <p>Population: {population.toLocaleString()}</p>
                  <p>Calling Code: {callingCodes}</p>
                  <p>
                    Timezones:<br></br> {timezones}
                  </p>
                  <button>
                    <Link to={`/countries/${name}`} className="link-btn">
                      Learn More
                    </Link>
                  </button>

                  <div>
                    <button
                      className="remove-btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      Remove Country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
    
    }

export default Countries 