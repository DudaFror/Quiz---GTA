// telas/sobre.js

// Importe o componente de ícone
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../css/estilo';

const Sobre = () => {
  const navigation = useNavigation();

  const handleEnterPressed = () => {
    navigation.navigate('Questao1');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sobre nós:</Text>
        <Text style={styles.paragrafo}>Henrique Cruz Rocha, Giovanni Carnelli e Dudão - 2°info</Text>

        <TouchableOpacity style={styles.botao} onPress={handleEnterPressed}>
          <Text style={styles.corBotao}> Iniciar Quiz! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sobre;
