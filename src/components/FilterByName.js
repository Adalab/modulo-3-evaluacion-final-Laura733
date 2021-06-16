import React from "react";

function FilterByName(props) {
  const handleChangeName = (ev) => {
    props.handleFilters({
      value: ev.target.value,
      key: "filterName",
    });
  };

  return (
    <>
      <label htmlFor='filterName'>Busca tu personaje</label>
      <input
        className='section__filters--filterName'
        placeholder='Escribe el nombre del personaje'
        type='text'
        name='name'
        id='filterName'
        onChange={handleChangeName}
      />
    </>
  );
}

export default FilterByName;
