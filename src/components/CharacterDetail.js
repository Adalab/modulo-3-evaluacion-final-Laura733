import React from "react";
import "../stylesheets/CharacterDetail.scss";

function CharacterDetail(props) {
  console.log(props);
  //props.characters.map((character)=> {
  //   return {
  //    name: character.name,
  //   }
  // })
  return (
    <section>
      {/* <img src={character.image} alt={props.characters.name} />
      <h1>{props.characters.name}</h1>
      <ul>
        <li>Status:{props.characters.status}</li>
        <li>Especie:{props.characters.specie}</li>
        <li>Origen:{props.characters.origen}</li>
        <li>Episodios:{props.characters.episodios}</li>
      </ul> */}
    </section>
  );
}

export default CharacterDetail;
