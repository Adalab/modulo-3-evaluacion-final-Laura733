import React from "react";

function FilterByEpisodes(props) {
  const handleChangeEpisodes = (ev) => {
    props.handleFilters({
      value: parseInt(ev.target.value),
      key: "filterEpisodes",
    });
  };
  return (
    <div>
      <label htmlFor='episodesFilter'></label>
      <input
        //className='section__filters--filterName'
        //placeholder='Ej: Abradolf Lincler'
        type='number'
        name='name'
        id='filterEpisodes'
        onChange={handleChangeEpisodes}
        value={props.filterEpisodes}
      />
    </div>
  );
}

export default FilterByEpisodes;
