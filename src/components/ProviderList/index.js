/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import api from '../../services/api';
import Styles from './styles';

function ProviderList({ navigation }) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers').then(res => {
        setProviders(res.data);
        setLoading(false);
      });
    }
    loadProviders();
  }, []);

  function handleSelect(id) {
    console.log(id);
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={providers}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={Styles.list}
              onPress={() => handleSelect(item.id)}
            >
              <Image
                style={Styles.avatar}
                source={{
                  uri: item.avatar
                    ? item.avatar.url
                    : 'https://api.adorable.io/avatars/285/abott@adorable.png',
                }}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

export default withNavigation(ProviderList);
