import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider'; 
import listOfFilms from './Film/ListOfFilm'; 

const FilmDetail = () => {
  const { id } = useParams();
  const { isDarkTheme } = useTheme();

  // Assuming listOfFilms is an array of film objects
  const film = listOfFilms.find((film) => film.id === parseInt(id));

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div className="container">
      <h2>Film Detail</h2>
      <div>
        <img src={film.image} alt={film.title} />
        <h3>{film.title}</h3>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
      </div>
    </div>
  );
};

export default FilmDetail;
