import React, { useEffect, useState } from "react";
import { FaArrowLeft} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./country.css";

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

  },[])

    return (
      <>
        <button>
          <Link to="/" className="link-btn">
            <FaArrowLeft  size="1rem" /> Back Home
          </Link>
        </button>
        <h1> Country Data </h1>
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
          nativeName,
          borders,
        } = c;

return (
  <article key={numericCode}>
    <div className="flag">
      <img src={flag} alt={name} />
    </div>
    <div className="countrydetail">
      <h2>{name}</h2>
      <h3 className="native">{nativeName}</h3>
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
    <h5>Border Countries:  {borders}</h5>
  </article>
);





    })}
</section>

      </>
    );
}


export default Country 