import Menu from "./components/Menu/Menu";
import { createGlobalStyle } from "styled-components";
import '../src/components/CSS/index.css';
import React from 'react';
import Main from './components/Main/main';

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
        <div>
            <GlobalStyle />
            <Menu />
            <Main />
        </div>
    );
};

export default App;
