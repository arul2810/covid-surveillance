/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
   <View style={{
     flex:1,
   }}>
   <Text style={{
     textAlign:'center',
     fontSize:25,
     fontWeight:'bold',
     backgroundColor:'skyblue',
     padding:30,
   }}>
   COVID Surveillance </Text>
   <View style={{
  position:'relative',
  right:75,
  top:130,
  left:50,
  bottom:200,
  width:300,
  height:350,
  justifyContent:'center',
  backgroundColor:'#f3edec',
  borderRadius:10,
   }}>
    <Text style={{
      flex:1,
      marginTop:20,
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
    }}>
    Login
    </Text>

    

   </View>

</View>

  );
};

const styles = StyleSheet.create({
 basictest:{
   flex:1,
   alignItems:"center"
 }
});

export default App;
