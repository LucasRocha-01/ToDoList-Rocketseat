import { StatusBar, View } from 'react-native';
import { Header } from './src/components/Header';
import { Home } from './src/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </>
  );
}

