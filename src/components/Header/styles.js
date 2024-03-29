import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: 70,
    maxHeight: 100,
    elevation: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  areaRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  iconBtn: {
    backgroundColor: '#0085FF',
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  title: {
    color: '#0085FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default Styles;
