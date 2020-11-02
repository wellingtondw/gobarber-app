import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input />
      <Input />

      <Button onPress={() => console.log('Ok')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
