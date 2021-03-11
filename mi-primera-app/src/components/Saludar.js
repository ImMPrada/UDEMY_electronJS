import { render } from '@testing-library/react';
import React from 'react';

export default function Saludar(props) {
  console.assert(props.userInfo);

  return(
    <div>
      <h2>Hola {props.userInfo.nombre}</h2>
    </div>
  )
}

export function ButtonSaludar(props) {

  return (
    <div>
      <button onClick={props.saludarFn}>Saludar</button>
    </div>
  )
}

