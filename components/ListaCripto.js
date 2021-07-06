import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { StyleSheet, Text, View, List, FlatList, ScrollView } from 'react-native';



const ListaCripto = () => {
    
    const [data, setData] = React.useState([]);
    
    axios({
        method: "GET",
        baseURL: 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',

    })
    .then ((res) => setData (res.data.Data))
    .catch((err) => console.log(err));
    
    
        return (
        
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                    <View style={styles.lista}>
                        <Text style = {styles.label}> {item.CoinInfo.FullName} </Text>
                        <Text style = {styles.texto}> {item.CoinInfo.Name} </Text>
                        <View style = {styles.subLista}>
                            <Text style = {styles.subLabel}> Precio (USD) </Text> 
                            <Text style = {styles.subTexto}> {item.DISPLAY.USD.PRICE} </Text>
                            <Text style = {styles.subLabel}> Var. 24 Hrs </Text> 
                            <Text style = {styles.subTexto}> {item.DISPLAY.USD.CHANGEPCT24HOUR} </Text>
                                
                            <Text style = {styles.actualizacion}> {item.DISPLAY.USD.LASTUPDATE} </Text>    
                        </View>
                    </View>
                }
     
            />
        )


};
    



const styles = StyleSheet.create({
    lista: {
        backgroundColor: '#FFFFFF',
        marginVertical: '1%',
        marginHorizontal: '3%', 
        borderColor: '#FFFFFF',
        borderBottomColor: '#D9D9D9',        
        borderWidth: 3,
        borderRadius: 8 ,
        paddingHorizontal: 10,
        paddingVertical: 5, 
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    texto: {
        fontSize: 18,
    },
    subLista: {
        flexDirection:'row',
        padding: 4,
        justifyContent:'space-between',
        justifyContent:'flex-end'
    },
    subLabel: {
        fontWeight: 'bold',
        fontSize: 13,
        
    },
    subTexto: {
        fontSize: 14,
    },
    actualizacion:{
        fontSize:12,
        marginHorizontal:10,
    }

});


export default ListaCripto ;