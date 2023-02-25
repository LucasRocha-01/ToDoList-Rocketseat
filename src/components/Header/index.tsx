import { Image, StyleSheet, Text, View } from 'react-native';


export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/Logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 173,
  },
  logo: {
    width: 110,
    height: 32,
  }
});
