import React from 'react';
import '../Styles/PaginationBar.scss';
import { pokemonStore } from '../Store/pokemon-reducer/pokemon-reducer';
import * as pokemonStoreActions from '../Store/pokemon-reducer/pokemon-actions';

export default function PaginationBar() {

  const togglePage = num => {
    pokemonStore.dispatch(pokemonStoreActions.setPage(num));
  }

  return (
    <div className="Pagination-bar">
      <p>Pages: </p>
      &nbsp;
      <a href="#" onClick={() => togglePage(1)}>1</a>
      &nbsp;
      <a href="#" onClick={() => togglePage(2)}>2</a>
      &nbsp;
      <a href="#" onClick={() => togglePage(3)}>3</a>
      &nbsp;
      <a href="#" onClick={() => togglePage(4)}>4</a>
      &nbsp;
      <a href="#" onClick={() => togglePage(5)}>5</a>
      &nbsp;
      <a href="#" onClick={() => togglePage(6)}>6</a>
    </div>
  )
}