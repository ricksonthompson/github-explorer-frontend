import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    // Essa prop dá mais qualidade às fontes no Chrome
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
    // Utiliza a font roboto, senão vai utilizar a outra
  }
  #root {
    max-width: 960px;
    // Limite da div na tela
    margin: 0 auto;
    // Vai centralizar no topo
    padding: 40px 20px;
    // Não vai deixar encostar nas bordas quando diminuir
  }
  button {
    cursor: pointer;
  }
`;
