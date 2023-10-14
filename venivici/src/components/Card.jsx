import React from "react";
import "./Card.css";


function Card({ dog, addBan }) {
    return (
      <div className="card" style={{backgroundColor: 'lightblue'}}>
        <img src={dog.image} alt={dog.breed} />
        <h2 style={{color: 'darkblue'}}>{dog.breed}</h2>
        <p style={{fontWeight: 'bold'}}>
          <span>Temperament:</span> {dog.temperament}
          <button onClick={() => addBan(dog.temperament)}>Ban</button>
        </p>
        <p>
          <span>Life Span:</span> {dog.life_span}
          <button onClick={() => addBan(dog.life_span)}>Ban</button>
        </p>
      </div>
    );
  }

export default Card;