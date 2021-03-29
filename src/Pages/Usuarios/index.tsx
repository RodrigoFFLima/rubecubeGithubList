import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Button,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
  {
    id: '1',
    title: 'ederzadravec',
  },
  {
    id: '2',
    title: 'ederzadravec',
  },
  {
    id: '3',
    title: 'ederzadravec',
  },
  {
    id: '4',
    title: 'ederzadravec',
  },
  {
    id: '5',
    title: 'ederzadravec',
  },
  {
    id: '6',
    title: 'ederzadravec',
  },
];

export default function Usuarios({navigation, route}) {
  const [users, setUsers] = React.useState<string[]>();
  const [modal, setModal] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [selectedId, setSelectedId] = useState(null);

  function hadleNavigateToRepositoriosPage(user: string) {
    navigation.navigate('Repositorios', {
      user,
    });
  }

  const handleAddUser = () => {
    const newUsers = users || [];
    newUsers.push(user);
    setUsers(newUsers);
    setUser('');
    setModal(false);
  };

  const handleRemoveUser = () => {
    const newUsers = users?.filter(user => user != route.params.delete);
    if (newUsers) setUsers([...newUsers]);
  };

  const renderBtns = () => {
    return users?.map((user, index) => (
      <Button
        key={index}
        title={user}
        onPress={() => hadleNavigateToRepositoriosPage(user)}
      />
    ));
  };
  useEffect(() => {
    handleRemoveUser();
  }, [route.params.delete]);

  useEffect(() => {
    renderBtns();
  }, [users]);

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Repositorios', {nome: 'Matheus'})}
      />
    );
  };

  const renderModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(false);
      }}>
      <View style={styles.containerModalAll}>
        <View style={styles.containerModal}>
          <Text style={styles.containerModalTitle}>Novo usuário</Text>
          <TextInput
            style={styles.containerModalInput}
            onChangeText={text => setUser(text)}
            value={user}
            placeholder="Usuário"
          />
          <TouchableOpacity
            style={styles.containerModalBtn}
            onPress={handleAddUser}>
            <Text style={styles.containerModalSave}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderModal()}

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => user.id}
        extraData={selectedId}
      />
      <View style={styles.viewUserAdd}>
        <TouchableOpacity
          title="Repo"
          onPress={() => {
            setModal(true);
          }}
          style={styles.btnAcessar}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
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

  viewUserAdd: {
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },

  btnAcessar: {
    width: 60,
    height: 60,
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#042A2B',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
  },

  containerModalAll: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerModal: {
    height: 200,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerModalTitle: {
    fontWeight: '700',
    color: '#042A2B',
    fontSize: 18,
  },

  containerModalInput: {
    width: '80%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    padding: 0,
    textAlign: 'center',
  },

  containerModalBtn: {
    backgroundColor: '#042A2B',
    width: '80%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  containerModalSave: {
    color: '#fff',
    fontSize: 18,
  },
});
