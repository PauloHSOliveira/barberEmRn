/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Styles from './styles';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function linkLogin() {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.container}>
      <View style={Styles.form}>
        <Input placeholder="Nome" icon="account-outline" />
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
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button children="Registrar" />
      </View>

      <View>
        <TouchableOpacity style={Styles.btnRegister} onPress={linkLogin}>
          <Text style={Styles.textRegister}>Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
