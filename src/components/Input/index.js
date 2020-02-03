/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default function Input({ icon, ...rest }) {
  return (
    <View style={Styles.container}>
      {icon && <Icon name={icon} size={20} color="#0085FF" />}
      <TextInput
        style={Styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#0085FF"
        {...rest}
      />
    </View>
  );
}
