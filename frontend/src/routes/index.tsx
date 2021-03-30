import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  /* Switch faz a validação do endereço na url para validar o caminho
     e chamar apenas uma rota, senão chamaria todas as rotas ao mesmo tempo
   */

  // 'exact' faz a validação para que seja chamada aquele exato caminho
  <Switch>
    <Route path='/' exact component={ Dashboard } />
    <Route path='/repository' component={ Repository } />
  </Switch>
);

export default Routes;
