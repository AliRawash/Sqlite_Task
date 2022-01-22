import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mainbutton = ({name, icon, onpress}) => {
    return (
        <TouchableOpacity style={Styles.buttonview} onPress={onpress} >
            <View style={{flexDirection:'row'}}>
            <Icon name={icon} size={30} color="#000" />   
            <Text style={Styles.text}>{name}</Text>
            </View>
            <Icon name="long-arrow-right" size={30} color="#000" style={{alignItems:'flex-end'}}/>   
      </TouchableOpacity>
  );
}

export default Mainbutton;

const Styles = StyleSheet.create({
    buttonview: {
        height: 70,
        borderRadius: 25,
        width: 300,
        backgroundColor: '#D3D3D3',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    text: {
        fontWeight: "bold",
        marginHorizontal: 10,
        fontSize:20
    }

})
