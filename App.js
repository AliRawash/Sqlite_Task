import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Model from './src/screens/Model';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
          component={Home}
          options={{
            title: 'Picture',
            headerStyle: {
              backgroundColor: '#D3D3D3',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        
        />
         <Stack.Screen name="Model"
          component={Model}
          options={{
            title: 'Model',
            headerStyle: {
              backgroundColor: '#D3D3D3',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        
        />

    <Stack.Screen name="Details"
              component={Details}
              options={{
                title: 'Model Details',
                headerStyle: {
                  backgroundColor: '#D3D3D3',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;