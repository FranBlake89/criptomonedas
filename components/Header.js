import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => (

    <Text style = { styles.encabezado }> Criptomonedas </Text>
);



const styles = StyleSheet.create({

    encabezado: {
        paddingTop: 30,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        backgroundColor: '#5E49E2',
        textAlign: 'center',
        paddingBottom: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color:'white'

    },

});


export default Header ;