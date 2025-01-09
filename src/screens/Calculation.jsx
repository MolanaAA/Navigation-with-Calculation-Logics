import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import React, { useState } from 'react'

const Calculation = (props) => {
  const [name, setName] = useState('');
  const [english, setEnglish] = useState('');
  const [maths, setMaths] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [physics, setPhysics] = useState('');

  const Calculate = () => {

    if(!name || !english || !maths || !chemistry || !physics){
        Alert.alert("All the fields are required!");
        return;
    };

    

   const sum = parseFloat(english) + parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry);
   

   props.navigation.navigate('Result' , {name, sum, english, maths, chemistry, physics}  );
  }

  return (
    <View style={styles.Screen} >

      <TextInput style={styles.Input}
        placeholder='Enter Your Name'
        value={name}
        onChangeText={setName}
        autoFocus
      />

      <TextInput style={styles.Input}
        placeholder='Enter Marks of English'
        keyboardType='numeric'
        value={english}
        onChangeText={setEnglish}
      />

      <TextInput style={styles.Input}
        placeholder='Enter Marks of maths'
        keyboardType='numeric'
        value={maths}
        onChangeText={setMaths}
      />

      <TextInput style={styles.Input}
        placeholder='Enter Marks of Chemistry'
        keyboardType='numeric'
        value={chemistry}
        onChangeText={setChemistry}
      />

      <TextInput style={styles.Input}
        placeholder='Enter Marks of Physics'
        keyboardType='numeric'
        value={physics}
        onChangeText={setPhysics}
      />

      <TouchableHighlight style={styles.Button} onPress={Calculate}>

        <Text style = {styles.ButtonText} > Calculate </Text>
      </TouchableHighlight>


    </View>
  );
};

export default Calculation;

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