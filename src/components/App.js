import React, { useEffect, useState } from "react";
import getDataFromApi from "./services/getDataFromApi";
import "../stylesheets/App.scss";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilters = (data) => {
    if (data.key === "filterName") {
      setFilterName(data.value);
    } else {
      setFilterSpecies(data.value);
    }
  };
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      console.log(character.specie);
      return filterSpecies === "all"
        ? true
        : character.specie === filterSpecies;
    });

  return (
    <>
      <h1 className='title'>Rick and Morty</h1>
      <Filters handleFilters={handleFilters} />
      <CharacterList characters={filterCharacters} />
      <CharacterDetail />
    </>
  );
}

export default App;
