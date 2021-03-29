import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './index.styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Usuarios({navigation, route}) {
  const [users, setUsers] = React.useState<string[]>();
  const [modal, setModal] = React.useState(false);
  const [user, setUser] = React.useState('');

  function hadleNavigateToRepositoriosPage(user: string) {
    navigation.navigate('Repositorios', {
      user,
    });
  }

  const handleAddUser = () => {
    const newUsers = users || [];
    newUsers.push(user);
    setUsers(newUsers);
    console.log(newUsers);
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
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        key={item}
        onPress={() => hadleNavigateToRepositoriosPage(item)}
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

      <ScrollView>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
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
