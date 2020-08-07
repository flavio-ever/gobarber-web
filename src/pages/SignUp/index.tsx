import React from 'react';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiMail} placeholder="Nome" />
        <Input name="email" icon={FiMail} type="email" placeholder="E-Mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="forgot">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
