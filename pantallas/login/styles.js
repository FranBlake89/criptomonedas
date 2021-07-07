import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create ({
    fondo:{
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    formulario: {
        backgroundColor: '#5E49E2',
        alignItems: 'center',
        padding: 20,
        marginVertical:'30%',
        marginHorizontal: '8%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,

        elevation: 12,
    },    
    label : {
        fontWeight: '900',
        fontSize: 18,
        marginTop: 5,
        width: 300,
        color:'#FFFFFF'
    },
    Input : {
        backgroundColor:'#FFFFFF',
        marginVertical: 15,
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 10,
        
    },
    btnIniciarSesion: {
        backgroundColor: '#2196F3',
        marginVertical: 30,
        borderRadius: 20,
        padding: 10,
        elevation: 9,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.6,
        shadowRadius: 10 ,
        shadowOffset : { width: 1, height: 13},
    },
    textIniciarSesion: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    textNuevo: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        marginTop:10
    },

});

export default styles