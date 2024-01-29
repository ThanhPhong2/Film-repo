import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'; 
import { useTheme } from '../context/ThemeProvider';
const FilmsPresentation = ({ films }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="container">
      {films.map((film) => (
        <Card key={film.id} className="column" bg={isDarkTheme ? 'dark' : 'light'} text={isDarkTheme ? 'light' : 'dark'}>
          <Card.Img variant="top" src={film.image} />
          <Card.Body className="card">
            <Card.Title>{film.title}</Card.Title>
            <Card.Text>Year: {film.year}</Card.Text>
            <Card.Text>Nation: {film.nation}</Card.Text>
            <Link to={`/film/${film.id}`}>
              <Button variant={isDarkTheme ? 'dark' : 'light'}>Detail</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FilmsPresentation;
