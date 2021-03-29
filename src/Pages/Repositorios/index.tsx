import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    title: 'Repo 1',
  },
  {
    id: '2',
    title: 'Repo 2',
  },
  {
    id: '3',
    title: 'Repo 3',
  },
  {
    id: '4',
    title: 'Repo 4',
  },
];

export default function Repositorios({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Repo', {nome: 'Matheus'})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewUserImg}>
        <View style={styles.viewUser}>
          <Image style={styles.imgUser}></Image>
        </View>

        <Text styles={styles.textUsuario}>(username)</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>

      <TouchableOpacity
        title="Repo"
        onPress={() => navigation.navigate('Repo', {nome: 'Matheus'})}
        style={styles.btnDeletar}>
        <Text style={{color: '#FFF', fontSize: 18}}>
          <Icon name="trash" size={20} color="#fff" /> Remover usuário
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    fontSize: 20,
    color: '#FFF',
    borderRadius: 12,
    backgroundColor: '#5EB1BF',
    textAlign: 'justify',
    alignItems: 'center',
  },

  btnDeletar: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#CA4141',
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  textUsuario: {
    padding: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
