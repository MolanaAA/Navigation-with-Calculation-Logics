import { View, TextInput, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native';
import React, { useState } from 'react';

const Addition = (props) => {
    const [fnum, setFnum] = useState('');
    const [snum, setSnum] = useState('');

    const Calculate = () => {

        if(!fnum || !snum) {
            Alert.alert("All the fields are required!");
            return;
        }

        const sum = parseFloat(fnum) + parseFloat(snum);

        console.log(sum)

        props.navigation.navigate('Result' , {fnum , snum , sum});

    }

  return (
     <View style={styles.Screen} >
    
          <TextInput style={styles.Input}
            placeholder='Enter First Number'
            keyboardType='numeric'
            value={fnum}
            onChangeText={setFnum}
            autoFocus
          />
    
          <TextInput style={styles.Input}
            placeholder='Enter Second Number'
            keyboardType='numeric'
            value={snum}
            onChangeText={setSnum}
          />
          <TouchableHighlight style={styles.Button} onPress={Calculate}>
          
                  <Text style = {styles.ButtonText} > Calculate </Text>
                </TouchableHighlight>
    </View>
  );
};

export default Addition;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,

    paddingVertical: 30,
  },
  Input: {
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: 15

  },
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