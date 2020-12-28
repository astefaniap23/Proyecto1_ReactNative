import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var altoCaja=150;
var anchoCaja=150;

export default function App() {
  return (
    <View style={miestilo.contenedor}>
 
          <View style={miestilo.caja01}>
            
          </View>
          <View style={miestilo.caja01}>
           
          </View>
          <View style={miestilo.caja01}>
          
          </View>
          <View style={miestilo.caja02}>
           
          </View>
          <View style={miestilo.caja03}>
           
          </View>
          <View style={miestilo.caja03}>
           
          </View>

    </View>
  );
}

const miestilo = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'steelblue'
    
  },
  caja01:{
    marginTop:10,
    height: altoCaja,
    width: anchoCaja,
    backgroundColor:"#9c9c9c",
    opacity:0.8,
    height:100,
    marginLeft:20,
    marginRight:20,
    paddingTop:10,
    backgroundColor:'orange',
    borderColor:'yellow',
  },
  caja02:{
    marginTop:-320,
    height: altoCaja,
    width: anchoCaja,
    backgroundColor:"#9c9c9c",
    opacity:0.8,
    height:100,
    marginLeft:anchoCaja + 50,
    marginRight:anchoCaja + 50,
    backgroundColor:'orange',
    borderColor:'yellow',
  },
  caja03:{
    marginTop:10,
    height: altoCaja,
    width: anchoCaja,
    backgroundColor:"#9c9c9c",
    opacity:0.8,
    height:100,
    marginLeft:anchoCaja + 50,
    marginRight:anchoCaja + 50,
    backgroundColor:'orange',
    borderColor:'yellow',
  },




  
})