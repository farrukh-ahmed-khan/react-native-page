import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Menu from './menu';
import Card from './card';


const App = () => {
  return (
      <ScrollView style={{width:"100%"}}>  

    <View>
      <Text style={styles.one}>Trade Center</Text>
      <View style={styles.three}></View>
      <View style={styles.two}>
        <Text style={styles.four}>open Trade</Text>
        <Text style={styles.four}>completed</Text>
      </View>
      <View style={styles.three}></View>
      <View style={styles.next}>
        <TouchableOpacity style={styles.new}>
          <Text style={styles.six}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <Text style={styles.six}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <Text style={styles.six}>Accepted</Text>
        </TouchableOpacity>
      </View>

    
        <Card />
        <Card />
        <Card />
        <Card />
    

      <View>
        <Menu />
        
      </View>
    </View>
    
    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  one: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  two: {
    flexDirection: 'row',
    marginTop: 1,
    justifyContent: 'space-evenly',
  },
  three: {
    borderWidth: 1,
    borderColor: 'black',
  },
  four: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  five: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: 'lightgrey',
    padding: 10,
  },

  new: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: 'black',
    padding: 10,
  },

  next: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  six: {
    color: 'white',
    fontSize: 16,
  },
});
export default App;
