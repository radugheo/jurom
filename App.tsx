import { StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/app-navigator';

export default function App() {
  return <AppNavigator/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
