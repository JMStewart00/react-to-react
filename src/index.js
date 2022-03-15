import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';

import App from './App';
import Ingredients from './routes/Ingredients';
import Wizards from './routes/Wizards';
import Elixirs from './routes/Elixirs';
import Houses from './routes/Houses';
import Characters from './routes/Characters';

const rootElement = document.getElementById("root"); // root element is in the index.html

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="elixirs" element={<Elixirs />} />
        <Route path="houses" element={<Houses />} />
        <Route path="wizards" element={<Wizards />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="characters" element={<Characters />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

