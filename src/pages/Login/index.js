/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Styles from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';
import { signInRequest } from '~/store/modules/auth/actions';

export default function Login({ navigation }) {
  const dispach = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function linkRegister() {
    navigation.navigate('Register');
  }

  function handleSubmit() {
    dispach(signInRequest(email, password));
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.container}>
      <View style={Styles.form}>
        <Input
          placeholder="Email"
          icon="email-outline"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          icon="lock-outline"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button children="Entrar" onPress={handleSubmit} loading={loading} />

        <TouchableOpacity style={Styles.returnPass}>
          <Text style={Styles.rtnPasstxt}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={Styles.btnRegister} onPress={linkRegister}>
          <Text style={Styles.textRegister}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
