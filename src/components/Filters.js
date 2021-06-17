import React from "react";
import "../stylesheets/Filters.scss";
import FilterByName from "./FilterByName";
import FiltersBySpecies from "./FilterBySpecies";

function Filters(props) {
  return (
    <form onSubmit={props.handleForm} className='section__filters'>
      <FilterByName handleFilters={props.handleFilters} />
      <FiltersBySpecies handleFilters={props.handleFilters} />
    </form>
  );
}

export default Filters;
