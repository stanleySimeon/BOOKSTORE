import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
