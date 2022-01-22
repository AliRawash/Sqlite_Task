import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


const Info = ({ title, text }) => {

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.textStyle}>{text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop:10
    },
})

export default Info;
