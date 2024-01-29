import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import Main from './component/Main';
import FilmDetail from './component/FilmDetail';
import Contact from './component/Contact';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<FilmDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
