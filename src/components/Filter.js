import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
const Filter = () => {
return (
  <section className="filter">
    <form className="formcontrol">
      <input
        type="search"
        name="serach"
        id="search"
        placeholder=" searching ...."
      />
      <div className="searchbtn">
        <FaSearch size="1.8em" />
      </div>
      <div>
        <select
          name="select"
          id="select"
          className="select"
 
        >
        
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  </section>
);




}




export default Filter;