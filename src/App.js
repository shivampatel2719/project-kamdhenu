import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import FlexibleImageContainer from './components/FlexibleImageContainer';

export default function App() {
  const imageurl = 'https://t4.ftcdn.net/jpg/03/13/26/93/360_F_313269335_lstj465YW0IfLzpPOUfkpwTACl87vTaW.jpg';
  const images = [ imageurl, imageurl, imageurl]
  return (
    <Navigation/>
    // <FlexibleImageContainer images={images}></FlexibleImageContainer>
  );
}

