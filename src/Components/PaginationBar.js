import React from 'react';
import '../Styles/PaginationBar.scss';

export default function PaginationBar(props) {

  const { page, togglePage } = props;

  console.log(page)

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