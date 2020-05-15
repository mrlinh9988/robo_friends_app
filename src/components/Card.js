import React from 'react';

const Card = ({ name, email, id }) => {
  return (
<<<<<<< HEAD
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
=======
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
>>>>>>> 18e510b2fbcbff1bea9c066f7ad9f2ff9cf41815
    </div>
  );
};

export default Card;
