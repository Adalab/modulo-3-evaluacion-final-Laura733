import React from "react";
import "../stylesheets/CharacterDetail.scss";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <>
      <Link className='section__detail--link' to='/'>
        Volver
      </Link>
      <section className='section__detail'>
        <img
          className='section__detail--img'
          src={props.character.image}
          alt={props.character.name}
        />
        <div>
          <h1>{props.character.name}</h1>
          <ul className='section__detail--list'>
            <li>Status: {props.character.status}</li>
            <li>Especie: {props.character.specie}</li>
            <li>Origen: {props.character.origin}</li>
            <li>Episodios: {props.character.episode.length}</li>
            <li>Comparte: {props.character.url}</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default CharacterDetail;
