
import { createGlobalStyle } from "styled-components";
import '../src/components/CSS/index.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main/main';
import About from '../src/components/About/About';
import Porotraits from '../src/components/Porotraits/Porotraits';
import Fashion from '../src/components/Fashion/Fashion';
import Motion from '../src/components/Motion/Motion';
import Contact from '../src/components/Contact/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #fdf2e9;
    font-family: 'Annie Use Your Telescope', cursive;
  }
`;

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/about_us" element={<About />} />
                <Route path="/porotraits" element={<Porotraits />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/motion" element={<Motion />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App; // Ensure App is exported as default
