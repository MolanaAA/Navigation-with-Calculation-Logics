import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React, { useEffect, useState } from 'react';

const Results = (props) => {
  const totalMarks = parseFloat(props.route.params.sum);
  const percentage = (totalMarks / 400) * 100;
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (percentage >= 80) {
      setGrade('A+');
    }
    else if (percentage >= 70) {
      setGrade('A');
    }
    else if(percentage >= 60){
      setGrade('B');
    }
    else {
      setGrade('F');
    }
  } , []);



  return (
    <View style={styles.Container} >
      <Text style={styles.Name} >Name: {props.route.params.name}</Text>
      <Text style={styles.Name} >Total Marks: {totalMarks}</Text>
      <Text style={styles.Name} >Percentage: {percentage.toFixed(2)}</Text>
      <Text style={styles.Name} >Grade: {grade}</Text>
      <TouchableHighlight style={styles.Button} onPress={()=> props.navigation.goBack()}>
      
              <Text style = {styles.ButtonText} > Redirect Back </Text>
            </TouchableHighlight>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  Container: {
    flex: 1,

  },
  Name: {
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
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
  },

});