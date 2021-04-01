import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories, Error } from './styles';
import githubLogo from '../../assets/logo.svg';
import api from '../../services/api';

// Dica: Tipar somente os dados que eu vou utilizar
// Essa é a tipagem do array
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// Declaração do componente em formato de função
const Dashboard: React.FC = () => {
  // Estrutura: var onde vai ser armazenado / var que vai setar um novo valor / estado atual (iniciando vazio)
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  // state para o error
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    // verifica se há informações no storage
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
      // converte novamente pra array
    }

    return [];
    // se o storage estiver vazio, retorna o array vazio
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      // Atribui uma key à informação que estou salvando
      JSON.stringify(repositories),
      // converte pra string
    );
  }, [repositories]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
    // formato do submit / formato do form
  ): Promise<void> {
    e.preventDefault();
    // Vai previnir o comportamento padrão do form de querer recarregar após o envio

    // se o input for vazia, return o erro
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      // get<> força a tipagem do return da requisição

      const repository = response.data;

      setRepositories([...repositories, repository]);
      // mantém os dados e adiciona um novo valor
      setNewRepo('');
      // mantém o input do form limpo após o envio
      setInputError('');
      // remove a msg de erro após a cond ser atentida
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    // <> </> fragments são utlizados quando há mais de um elemento declarado
    // {!!inputError} vai converter uma string em boolean.
    // {inputError && <Error>{inputError}</Error>} cria um if simplificado. Onde só vai mostrar o elemento se houver o erro
    <>
      <img src={githubLogo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          // vai capturar o valor do input
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          // vai percorrer o array e retornar cada value
          // é obrigatório possuir uma key
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
