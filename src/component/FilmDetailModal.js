import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeProvider';

const FilmDetailModal = ({ show, onHide, film }) => {
  const { isDarkTheme } = useTheme();

  return (
    <Modal show={show} onHide={onHide} variant={isDarkTheme ? 'dark' : 'light'}>
      <Modal.Header closeButton>
        <Modal.Title>{film.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={isDarkTheme ? 'dark' : 'light'} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilmDetailModal;
