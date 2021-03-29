import {StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    paddingTop: 8,
    paddingBottom: 24,
    fontSize: 18,
    textAlign: 'center',
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

  containerModalText: {
    textAlign: 'center',
    width: '64%',
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

  containerModalRemove: {
    color: '#fff',
    fontSize: 18,
  },
});
