import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../css/estilo';

const Splash = () => {
  const navigation = useNavigation();

  const handleEnterPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.containerSplash}>
      <Text style={styles.title}>Bem-vindo ao Quiz!</Text>
      <Text style={styles.title}>GTA V</Text>
      <TouchableOpacity style={styles.botao} onPress={handleEnterPressed}>
        <Text style={styles.corBotao}> Entrar </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
