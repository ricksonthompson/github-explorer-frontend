import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  // vai forçar o texto a quebrar
  line-height: 56px;
  margin-top: 80px;
  // vai distanciar o topo da logo
`;

export const Form = styled.form`
  // O styled permite trabalhar com encadeamento, ou seja, tudo aqui dentro vai receber essas configs

  margin-top: 40px;
  max-width: 700px;
  // vai ocupar o espaço disponível
  display: flex;
  // vai ser flexivel internamente
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    // define o posicionamento do placeholder
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    // define a velocidade do hover
    &:hover {
      background: ${shade(0.2, '#04d361')};
      // Utiliza a lib polished pra aplicar a opacidade
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    // Remove os underlines por volta
    display: flex;
    // Para os elementos ficarem ao lado do outro
    align-items: center;
    // Alinhar os eixos no centro
    transition: transform 0.2s;
    & + a {
      // & referencia um elemento apenas. Como um this
      // + quer dizer que, se ele elemento prodeceder de um semelhante, ele vai aplicar a estilização
      margin-top: 16px;
      // Aplica o distanciamento entre os objetos
    }
    &:hover {
      transform: translateX(10px);
      // Permite fazer essa transição pro lado
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      // Faz a borda ficar arredondada
    }
    div {
      margin-left: 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      // Permite manipular os icons
      margin-left: auto;
      // Pega toda a margem da esquerda e joga pra direita
      color: #cbcbd6;
    }
  }
`;
