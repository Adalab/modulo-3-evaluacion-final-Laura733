import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <p> Vuelve al inicio haciendo click </p>
      <Link to='/'>AQUI </Link>
    </div>
  );
}

export default PageNotFound;
