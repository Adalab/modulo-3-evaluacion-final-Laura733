import React from "react";
import "../stylesheets/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <section className='section__card'>
      <img
        className='section__card--img'
        src={props.character.image}
        alt={props.character.name}
      />
      <div className='section__card--name'>
        <h1>{props.character.name}</h1>
        <span>{props.character.specie}</span>
      </div>
    </section>
  );
}

export default CharacterCard;
