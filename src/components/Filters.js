import React from "react";
import "../stylesheets/Filters.scss";
import FilterByName from "./FilterByName";
import FiltersBySpecies from "./FilterBySpecies";
import FilterByEpisodes from "./FilterByEpisodes";

function Filters(props) {
  return (
    <form onSubmit={props.handleForm} className='section__filters'>
      <FilterByName
        handleFilters={props.handleFilters}
        filterName={props.filterName}
      />
      <FiltersBySpecies
        handleFilters={props.handleFilters}
        filterSpecies={props.filterSpecies}
      />

      <FilterByEpisodes handleFilters={props.handleFilters} filterEpisodes={props.filterEpisodes} />
    </form>
  );
}

export default Filters;
