import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Usuarios from './src/pages/Usuarios';
import Repositorios from './src/pages/Repositorios';
import Repo from './src/pages/Repo';

export type RootStackParamList = {
  Usuarios: {delete?: string};
  Repositorios: {user: string};
  Repositorio: {
    name: string;
    description: string;
    language: string;
    img: string;
    username: string;
    html_url: string;
  };
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuarios">
        <Stack.Screen
          name="Usuarios"
          component={Usuarios}
          initialParams={{delete: ''}}
          options={{
            title: 'Usuários',
            headerStyle: {
              backgroundColor: '#042A2B',
            },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Repositorios"
          component={Repositorios}
          options={{
            title: 'Repositórios',
            headerStyle: {
              backgroundColor: '#042A2B',
            },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Repo"
          component={Repo}
          options={{
            title: 'Repo',
            headerStyle: {
              backgroundColor: '#042A2B',
            },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
