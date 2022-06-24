import React, { useEffect, useState } from "react";

import { FaArrowLeft} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./country.css"


const Country = ( ) => {
const [country, setCountry] = useState([]);

 const { name } = useParams()

  useEffect (() => {
    const fetchCountryData = async () => {
        const response = await fetch (
            `https://restcountries.com/v2/name/${name}`
        )
const country = await response.json()
      setCountry(country)
      console.log(country)

    }
     fetchCountryData()

  },[name])

    return (
      <>
        <button>
          <Link to="/" className="link-btn">
            <FaArrowLeft size="1rem" /> Back Home
          </Link>
        </button>
        <h1 className="countrytitle"> Country Data </h1>
        <section className="country">
          {country.map((c) => {
            const {
              numericCode,
              flag,
              name,
              region,
              subregion,
              topLevelDomain,
              currencies,
              languages,
              latlng,
              borders,
            } = c

            return (
              <article key={numericCode}>
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>
                <div className="countrydetail">
                  <h2>{name}</h2>

                  <p>Region: {region}</p>
                  <p>Sub Region: {subregion}</p>
                  <p>Top Level Domain: {topLevelDomain}</p>
                  <p>
                    Currency: {currencies[0].symbol}, {currencies[0].name}
                  </p>
                  <p>languages: {languages[0].name}</p>
                  <p>Latitude: {latlng[0]}</p>
                  <p>Longitude: {latlng[1]}</p>
                </div>
                <div>
                  ////////////////
                  <h3>Border Countries: </h3>
                  <div className="borders">
                    {borders.map((border) => {
                      return (
                        <ul key={border}>
                          <li>{border}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </>
    );
}


export default Country 
     
                ////<div>
                  ///<h3>Border Countries: </h3>
                  ///<div className="borders">
                 ///   {borders.map((border) => {
                    ///  return (
                    ///    <ul key={border}>
                       //   <li>{border}</li>
                     //   </ul>
                      //);
                    ///})}
                  //</div>
                ///</div>/