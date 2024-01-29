import React from 'react';
import listOfFilms from '../Films/ListOfFilms';

const FilmCard = ({ film }) => (
  <div className="film-card">
    <img src={film.image} alt={film.title} />
    <h3>{film.title}</h3>
    <p>{`Year: ${film.year}, Nation: ${film.nation}`}</p>
  </div>
);

const Films = () => (
  <div className="films-container">
    <h2>List of Films</h2>
    <div className="films-list">
      {listOfFilms.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  </div>
);

export default Films;
