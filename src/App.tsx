import Menu from "./components/Menu/Menu";
import Main from "./components/Main/main"
import { createGlobalStyle } from "styled-components";


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
            <Main/>
        </div>
    );
};

export default App;
