import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
//<ReactQueryDevtools initialIsOpen={false} /> 

import { Home } from './pages/Home';
import { PokemonDetail } from './pages/PokemonDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-b from-pink-400 to-pink-600">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;