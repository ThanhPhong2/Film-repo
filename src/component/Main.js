import React from 'react';
import FilmsPresentation from './FilmsPresentation';
import { useTheme } from '../context/ThemeProvider';
import listOfFilms from './Film/ListOfFilm'; 

const Main = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div>
      <FilmsPresentation films={listOfFilms} />
    </div>
  );
};

export default Main;
