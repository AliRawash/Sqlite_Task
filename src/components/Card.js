import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Card = ({title, image, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={Styles.cardView}>
            <Image
            source={image}
            style={Styles.image}
            />
            <Text style={Styles.title}>{title}</Text>

      </TouchableOpacity>
  );
}

export default Card;

const Styles = StyleSheet.create({
    cardView: {
        height: 180,
        width: 160, 
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        elevation: 10,
        marginBottom:10
    },
    title: {
        fontWeight: "bold",
        marginHorizontal: 10,
        fontSize: 20,
        alignSelf: 'center',
    },
    image: {
        width: '90%',
        height: '80%',
        borderRadius: 25,
        alignSelf: 'center',
        resizeMode: 'contain'
    }

})