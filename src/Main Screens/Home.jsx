// import { View, Text , TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableHighlight, View , Text } from 'react-native';
// import Sum from "./Sum";

const Home = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.container} >
        
            <Text>Hello Dear</Text>

            <TouchableHighlight style={styles.Button} onPress={() => navigation.navigate('Sum') }>
                <Text style={styles.ButtonText} > Calculate Sum </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.Button} onPress={() => navigation.navigate('Percent')} >
                <Text style={styles.ButtonText} > Calculate Percentage </Text>
            </TouchableHighlight>
          </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Button:{
      padding: 20,
      margin: 10,
      backgroundColor:'blue',
      borderRadius: 15,
  
    },
    ButtonText:{
      fontSize: 20,
      color: 'white',
      fontWeight: '700',
  
    }
  })