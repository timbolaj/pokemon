import React from 'react';
import '../Styles/Loading.scss';

export default function Loading() {
  return (
    <div className="Loading">
      <div className="load-icon">
        <div className="loader"></div>
      </div>
      <div>
        <h2>Loading Pokemon</h2>
      </div>
    </div>
  )
}