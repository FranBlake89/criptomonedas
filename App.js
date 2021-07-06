import React, {Component} from 'react';
import axios from 'axios';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './components/Header';
import Formulario from './components/Formulario';



const App = () => {

  return (
   <>
      <Header />

      <ListaCripto />

      <View style = {styles.final}></View> 


   </>
  );
};

const styles = StyleSheet.create({
  final: {
      marginBottom:15 
},
});

export default App;
