/* eslint-disable react/prop-types */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Styles from './styles';

export default function Header({ title }) {
  return (
    <View style={Styles.header}>
      <View style={Styles.areaRow}>
        <Text style={Styles.title}>{title}</Text>
        <TouchableOpacity style={Styles.iconBtn}>
          <Icon name="dots-three-horizontal" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
