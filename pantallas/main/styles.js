import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    bienvenida: {
        backgroundColor: '#5C24FF',
        padding: 20,
        marginBottom:'1%',
        borderBottomStartRadius: 20,    
        borderBottomEndRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,

        elevation: 8,
    },
    close:{
        alignItems:'flex-end',
    },
    textclose:{
        color: '#F35353',
        fontSize: 18,
        fontWeight:'700'
    },
    nombre:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 30

    },
    dinero:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
       
    },
    simbolopeso:{
        color:'#FFFFFF',
        fontWeight: '600',
        fontSize: 30,
    },
    pesos: {
        color:'#FFFFFF',
        fontWeight: '600',
        fontSize: 24,

    },
    labelForm:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize: 26,
    },
    textoForm:{
        color:'#FFFFFF',
        fontWeight: '600',
        fontSize: 24,
    },    
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
        justifyContent:'space-around',
        alignItems:'flex-end',
        borderColor:'#5C24FF',
        borderWidth:0.35,
        borderRadius:10
        
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
        width:'100%',
        alignItems:'center',
    }

});

export default styles