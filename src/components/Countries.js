import React, { useState, useEffect } from "react";
//https://restcountries.com/#api-endpoints-v3-all
const url = "https://restcountries.com/v3.1/all"
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
        <div>
            {countries.map ((country) => {
                const {id} = country

                return <article key={id}> Country Data</article>
            })}

        </div>
    )
}

export default Countries 