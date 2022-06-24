import React, { useEffect, useState } from "react";
import { FaArrowLeft} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

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
      </>
    );
}


export default Country 