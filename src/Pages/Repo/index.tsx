
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Repositorios({ route, navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewUserImg}>
        <View style={styles.viewUser}>
          <Image style={styles.imgUser}>

          </Image>
        </View>

        <Text style={styles.textUsuario}>
          (username)
        </Text>
      </View>
      <View>
        <View style={styles.viewTexts}>
          <Text style={styles.title}>
            Descrição
          </Text>
          <Text style={styles.textPadrao}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Text>
          <Text style={styles.title}>
            Linguagem
          </Text>
          <Text style={styles.textPadrao}>
            Contrary to popular
          </Text>
        </View>
      </View>

      <TouchableOpacity
        title="Repo"
        onPress={() => navigation.navigate('Usuarios', { nome: 'Matheus' })}
        style={styles.btnAcessar}
      >
        <Text style={{ color: '#FFF', fontSize: 18 }}>
          <Icon name="arrow-redo" size={20} color="#fff" /> Acessar
            </Text>
      </TouchableOpacity>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  viewTexts: {
    padding: 20,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#5EB1BF',
    alignItems: 'center',
    borderRadius: 12,
  },

  title: {
    fontSize: 18,
    color: '#042A2B',
    borderRadius: 12,
    fontWeight: '700',
  },

  textPadrao: {
    marginTop: 10,
    marginBottom: 14,
    fontSize: 18,
    color: '#042A2B',
    fontWeight: '400',
  },

  btnAcessar: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#042A2B',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

  viewUserImg: {
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },

  viewUser: {
    width: 150,
    height: 150,
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgUser: {
    width: "100%",
    height: '100%',
    borderRadius: 4,
  },
});