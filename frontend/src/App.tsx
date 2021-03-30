import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

// App: É o componente principal que vai ser renderizado na raíz

const App: React.FC = () => (
  // BrowserRouter: Ele que vai permitir navegar entre as rotas pela url
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
