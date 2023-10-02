import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import NotFound from './pages/notFound';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="NotFound" />} />
        </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;