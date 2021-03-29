import {StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  viewTexts: {
    padding: 20,
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
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
