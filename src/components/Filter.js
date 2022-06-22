import React, { useEffect } from "react";

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
      <div>
        <select
          name="select"
          id="select"
          className="select"
          placeholder="Category "
        >
          <option value="Africa">Category </option>
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