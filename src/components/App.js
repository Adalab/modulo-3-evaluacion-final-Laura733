import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "./services/getDataFromApi";
import "../stylesheets/App.scss";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import PageNotFound from "./PageNotFound";

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
      return filterSpecies === "all"
        ? true
        : character.specie === filterSpecies;
    });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterid;
    const founCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    if (founCharacter !== undefined) {
      return <CharacterDetail />;
    } else {
      return <h2>El personaje que busca no existe</h2>;
    }
  };

  return (
    <>
      <h1 className='title'>Rick and Morty</h1>
      <Filters handleFilters={handleFilters} />
      <CharacterList characters={filterCharacters} />
      <Switch>
        {/* <Route exact path='/' />
        <Route /> */}
        <Route path='/detail/:id' render={renderCharacterDetail} />
        <Route />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
