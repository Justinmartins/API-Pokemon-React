import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonDetail } from './pages/PokemonDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-400 to-pink-600">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;