import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mainbutton from '../components/Mainbutton';

const Home = ({navigation}) => {

  const GoModal = () => {
    navigation.navigate('Model')
  }
  
    return (
      <View>
            <Mainbutton name='Asset Inventory' icon='inbox' />
            <Mainbutton name='Model' icon='user-plus' onpress={GoModal}/>
            <Mainbutton name='Person' icon='user-plus'/>   
      </View>
  );
}

export default Home;