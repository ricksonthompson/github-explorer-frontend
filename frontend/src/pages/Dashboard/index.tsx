import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import githubLogo from '../../assets/logo.svg';
import api from '../../services/api';

// Dessa forma é declarado o componente em formato de função
const Dashboard: React.FC = () => {
  return (
    // <> </> fragments são utlizados quando há mais de um elemento declarado
    <>
      <img src={githubLogo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/41199059?v=4"
            alt="Rickson Thompson"
          />
          <div>
            <strong>github-explorer-backend</strong>
            <p>Aplicação desenvolvida em ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
