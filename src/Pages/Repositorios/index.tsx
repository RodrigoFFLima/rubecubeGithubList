import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  Image,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {IGitUserProps, IReposProps} from './types';
import api from '../../servicos/api';

import styles from './index.styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Repositorios({route, navigation}) {
  const {user} = route.params;

  const [gitUser, setGitUser] = React.useState<IGitUserProps>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [modal, setModal] = React.useState<boolean>(false);

  function hadleNavigateToUsuariosPage() {
    navigation.navigate('Usuarios', {
      delete: user,
    });
  }

  function hadleNavigateToRepositorioN(repo: IReposProps) {
    if (gitUser)
      navigation.navigate('Repo', {
        username: gitUser.userName,
        img: gitUser.img || 'Sem Imagem',
        description: repo.description || 'Sem descrição',
        language: repo.language,
        name: repo.name,
        html_url: repo.html_url,
      });
  }

  useEffect(() => {
    const getRepositorio = async () => {
      try {
        const response = await api.get(`users/${user}`);
        if (response.status === 200) {
          const {avatar_url} = response.data;
          const newRepos: IReposProps[] = [];

          const responseRepo = await api.get(`users/${user}/repos`);
          if (responseRepo.status === 200) {
            responseRepo.data.map((data: IReposProps) => {
              const newRepo: IReposProps = {
                name: data.name,
                language: data.language,
                description: data.description,
                html_url: data.html_url,
              };
              newRepos.push(newRepo);
            });
          }
          const newGitUser = {
            img: avatar_url,
            userName: user,
            repos: newRepos,
          };
          setGitUser(newGitUser);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    getRepositorio();
  }, []);

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
          <Text style={styles.containerModalTitle}>Tem certeza ?</Text>
          <Text style={styles.containerModalText}>
            <Text>Tem certeza que deseja remover o usuário</Text>
            <Text style={{fontWeight: 'bold'}}> {user}</Text>
            <Text>?</Text>
          </Text>
          <TouchableOpacity
            style={styles.containerModalBtn}
            onPress={hadleNavigateToUsuariosPage}>
            <Text style={styles.containerModalRemove}>
              <Icon name="trash" size={20} color="#fff" /> Remover
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        item={item.name}
        key={item.name}
        onPress={() => {
          hadleNavigateToRepositorioN(item);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderModal()}

      <ScrollView>
        <View style={styles.viewUserImg}>
          <View style={styles.viewUser}>
            {gitUser?.img ? (
              <Image style={styles.imgUser} source={{uri: gitUser?.img}} />
            ) : (
              <Text>Sem Imagem</Text>
            )}
          </View>

          <Text styles={styles.textUsuario}>
            {gitUser?.userName || 'Usuário não encontrado'}
          </Text>
        </View>
        <View>
          <FlatList
            data={gitUser?.repos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
        style={styles.btnDeletar}>
        <Text style={{color: '#FFF', fontSize: 18}}>
          <Icon name="trash" size={20} color="#fff" /> Remover usuário
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
