import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#191919',
  },
  form: {
    marginTop: -25,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    zIndex: 2,
  },
  input: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    padding: 16,
    gap: 8,
    height: 54,

    backgroundColor: '#262626',
    borderRadius: 6,
  },
  btnForm: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  contadores: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '100%'
  },
  ListEmptyComponent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#808080',
    borderTopWidth: 0.5,
    paddingVertical: 30
  },
  listEmptyTextBold: {
    marginTop: 20,
    color: '#808080',
    fontWeight: 'bold',
  },
  listEmptyText: {
    color: '#808080'
  },
  flatList: {
    width: '100%',
  }

})