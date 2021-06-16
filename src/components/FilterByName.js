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
      <label htmlFor='filterName'>Nombre del personaje</label>
      <input
        className='section__filters--filterName'
        placeholder='escribe el nombre del personaje'
        type='text'
        name='name'
        id='filterName'
        onChange={handleChangeName}
      />
    </>
  );
}

export default FilterByName;
