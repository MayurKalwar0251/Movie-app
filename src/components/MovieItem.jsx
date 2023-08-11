

import React, { useState } from 'react';
// import { BsFillHeartFill } from 'react-icons/bs';

export default function MovieItem(props) {
  let { title, Year, image,  } = props;
  return (
    <>
      <div className="card" style={{ width: '20rem' }}>

        <img src={image} style={{ height: '23rem' }} className="card-img-top" alt="Not found" />
        <div className="card-body">
          <h5 className="card-title">Title: {title}</h5>
          <h5 className="card-title">Year: {Year}</h5>
        </div>
      </div>
    </>
  );
}
