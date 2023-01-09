import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App';
// import Guk from './guk/guk.js';
// import Irit from './irit-rtf/irit-rtf.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/irit" element={<Irit />} />
//       <Route path="/guk" element={<Guk />} />
//     </Routes>
//   </BrowserRouter>
// );