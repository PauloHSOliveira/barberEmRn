/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';
import Header from '~/components/Header';
import ProviderList from '~/components/ProviderList';

export default function Dashboard() {
  return (
    <View style={Styles.container}>
      <Header title="Menu" />
      <View style={Styles.list}>
        <ProviderList style={Styles.list} />
      </View>
    </View>
  );
}

Dashboard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={30} color={tintColor} />
  ),
};
