import React from "react";

function FiltersBySpecies(props) {
  const handleChangeSelect = (ev) => {
    props.handleFilters({
      value: ev.target.value,
      key: "filterSpecies",
    });
  };
  return (
    <>
      <label htmlFor='filterspecies'>Especie</label>
      <select
        className='section__filters--filterSpecies'
        name='filterSpecies'
        id='filterSpecies'
        onChange={handleChangeSelect}
      >
        <option value='all'>Todos</option>
        <option value='human'>Human</option>
        <option value='alien'>Alien</option>
      </select>
    </>
  );
}

export default FiltersBySpecies;
