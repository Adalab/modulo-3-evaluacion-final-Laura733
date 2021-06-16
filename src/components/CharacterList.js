import React from "react";
import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <section className='section__list'>
      <ul
        filterCharacters={props.filterCharacters}
        className='section__list--elements'
      >
        {characterElements}
      </ul>
    </section>
  );
}

export default CharacterList;
