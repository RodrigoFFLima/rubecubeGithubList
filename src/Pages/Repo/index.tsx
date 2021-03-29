import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

import styles from './index.styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Repositorios({route}) {
  const {description, username, img, language, html_url} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewUserImg}>
        <View style={styles.viewUser}>
          {img ? (
            <Image style={styles.imgUser} source={{uri: img}} />
          ) : (
            <Text>Sem Imagem</Text>
          )}
        </View>

        <Text style={styles.textUsuario}>{username}</Text>
      </View>
      <View>
        <View style={styles.viewTexts}>
          <Text style={styles.title}>Descrição</Text>
          <Text style={styles.textPadrao}>{description}</Text>
          <Text style={styles.title}>Linguagem</Text>
          <Text style={styles.textPadrao}>{language}</Text>
        </View>
      </View>

      <TouchableOpacity
        title="Repo"
        onPress={() => {
          Linking.openURL(html_url);
        }}
        style={styles.btnAcessar}>
        <Text style={{color: '#FFF', fontSize: 18}}>
          <Icon name="arrow-redo" size={20} color="#fff" /> Acessar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
