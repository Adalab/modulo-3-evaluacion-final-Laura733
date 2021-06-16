import React from "react";
import "../stylesheets/CharacterDetail.scss";

function CharacterDetail(props) {
  return (
    <section>
      <img src={props.characters.image} alt={props.characters.name} />
      <h1>{props.characters.name}</h1>
      <ul>
        <li>Status:{props.characters.status}</li>
        <li>Especie:{props.characters.specie}</li>
        <li>Origen:{props.characters.origin}</li>
        <li>Episodios:{props.characters.episode}</li>
      </ul>
    </section>
  );
}

export default CharacterDetail;
