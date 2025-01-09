import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

const AddResult = (props) => {
    const num1 = props.route.params.fnum;
    const num2 = props.route.params.snum;
    const sum = props.route.params.sum;
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{num1} + {num2} = {sum}</Text>
            <TouchableHighlight style={styles.Button} onPress={() => props.navigation.goBack()}>

                <Text style={styles.ButtonText} > Calculate </Text>
            </TouchableHighlight>
        </View>
    );
};

export default AddResult;

const styles = StyleSheet.create({

    Button: {
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,


    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});