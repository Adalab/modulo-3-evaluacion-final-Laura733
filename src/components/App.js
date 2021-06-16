import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "./services/getDataFromApi";
import "../stylesheets/App.scss";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import PageNotFound from "./PageNotFound";
import ls from "../components/services/localStorage";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "all")
  );

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [characters, filterName, filterSpecies]);

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
      // if (character === filterName) {
      //   return character.name.toLowerCase().includes(filterName.toLowerCase());
      // } else {
      //   return "No hay ningún personaje con la palabra...";
      // }
    })
    .filter((character) => {
      return filterSpecies === "all"
        ? true
        : character.specie === filterSpecies;
    });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <h2>El personaje que busca no existe</h2>;
    }
  };

  return (
    <>
      <h1 className='title'>Rick and Morty</h1>
      <Switch>
        <Route exact path='/' />
        <Filters handleFilters={handleFilters} />
        <CharacterList characters={filterCharacters} />
        {/* <CharacterDetail characters={filterCharacters} /> */}
        <Route />
        <Route path='/detail/:characterId' render={renderCharacterDetail} />
        <Route />
        <Route />
        <PageNotFound />
        <Route />
      </Switch>
    </>
  );
}

export default App;
