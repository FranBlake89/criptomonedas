import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor: '#5E49E2',
    },
    formulario: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        marginVertical:'30%',
        marginHorizontal: '8%',
        borderRadius: 20,
        shadowColor: "#000000",
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
        color:'#000000'
    },
    Input : {
        backgroundColor:'#FFFFFF',
        marginVertical: 15,
        height: 50,
        borderColor: '#BDBDBD',
        borderRadius: 50,
        borderWidth: 3,
        paddingHorizontal: 10,
        
    },
    btnNuevoUsuario: {
        backgroundColor: '#2196F3',
        marginVertical: 30,
        borderRadius: 20,
        padding: 10,
        elevation: 9,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10 ,
        shadowOffset : { width: 1, height: 13},
        width:'100%'
    },
    textNuevoUsuario: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center'
    },

});




export default styles